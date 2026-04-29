<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InscriptionEvenement;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'totalInscriptions' => InscriptionEvenement::query()->count(),
            'totalInscriptionsPayees' => InscriptionEvenement::query()->where('statut_paiement', 'payee')->count(),
        ]);
    }
}
