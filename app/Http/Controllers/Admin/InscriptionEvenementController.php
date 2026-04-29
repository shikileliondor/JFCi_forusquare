<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdatePaiementInscriptionRequest;
use App\Models\Evenement;
use App\Models\InscriptionEvenement;
use App\Services\InscriptionEvenementService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InscriptionEvenementController extends Controller
{
    public function __construct(private InscriptionEvenementService $inscriptionEvenementService) {}

    public function index(Request $request): Response
    {
        $filters = $request->validate([
            'q' => ['nullable', 'string'],
            'statut_paiement' => ['nullable', 'in:non_payee,payee'],
            'evenement_id' => ['nullable', 'integer', 'exists:evenements,id'],
        ]);

        $inscriptions = InscriptionEvenement::query()
            ->with('evenement:id,titre')
            ->when($filters['q'] ?? null, function (Builder $query, string $term): void {
                $query->where(function (Builder $searchQuery) use ($term): void {
                    $searchQuery
                        ->where('nom', 'like', "%{$term}%")
                        ->orWhere('telephone', 'like', "%{$term}%")
                        ->orWhere('code_inscription', 'like', "%{$term}%");
                });
            })
            ->when($filters['statut_paiement'] ?? null, fn (Builder $query, string $statutPaiement) => $query->where('statut_paiement', $statutPaiement))
            ->when($filters['evenement_id'] ?? null, fn (Builder $query, int $evenementId) => $query->where('evenement_id', $evenementId))
            ->latest('date_inscription')
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Admin/Inscriptions/Index', [
            'inscriptions' => $inscriptions,
            'filters' => $filters,
            'evenements' => Evenement::query()->select(['id', 'titre'])->orderBy('titre')->get(),
        ]);
    }

    public function show(InscriptionEvenement $inscription): Response
    {
        $inscription->load('evenement:id,titre,slug');

        return Inertia::render('Admin/Inscriptions/Show', [
            'inscription' => $inscription,
        ]);
    }

    public function updatePaiement(UpdatePaiementInscriptionRequest $request, InscriptionEvenement $inscription): RedirectResponse
    {
        if ($request->validated('statut_paiement') === 'payee') {
            $this->inscriptionEvenementService->marquerCommePayee($inscription);
        }

        return back()->with('success', 'Le statut de paiement a été mis à jour.');
    }
}
