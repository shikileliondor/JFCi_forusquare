<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\Public\StoreInscriptionEvenementRequest;
use App\Models\Evenement;
use App\Services\InscriptionEvenementService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class InscriptionEvenementPublicController extends Controller
{
    public function __construct(private InscriptionEvenementService $inscriptionEvenementService) {}

    public function create(Evenement $evenement): Response
    {
        return Inertia::render('Public/Evenements/Inscription', [
            'evenement' => $evenement,
        ]);
    }

    public function store(StoreInscriptionEvenementRequest $request, Evenement $evenement): RedirectResponse
    {
        $this->inscriptionEvenementService->creer([
            ...$request->validated(),
            'evenement_id' => $evenement->id,
        ]);

        return to_route('public.evenements.inscription.create', $evenement)
            ->with('success', 'Votre inscription a été enregistrée avec succès.');
    }
}
