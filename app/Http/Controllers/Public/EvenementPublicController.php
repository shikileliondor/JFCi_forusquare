<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Evenement;
use Inertia\Inertia;
use Inertia\Response;

class EvenementPublicController extends Controller
{
    public function index(): Response
    {
        $evenements = Evenement::query()
            ->where('statut', 'publie')
            ->orderBy('date_debut')
            ->get();

        return Inertia::render('Public/Evenements/Index', [
            'evenements' => $evenements,
        ]);
    }

}
