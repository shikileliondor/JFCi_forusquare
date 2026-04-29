<?php

namespace App\Services;

use App\Models\InscriptionEvenement;
use Illuminate\Support\Str;

class InscriptionEvenementService
{
    public function creer(array $donnees): InscriptionEvenement
    {
        $donnees['code_inscription'] = $this->genererCodeUnique();
        $donnees['statut_paiement'] = 'non_payee';
        $donnees['date_inscription'] = now();

        return InscriptionEvenement::create($donnees);
    }

    public function marquerCommePayee(InscriptionEvenement $inscription): InscriptionEvenement
    {
        $inscription->update(['statut_paiement' => 'payee']);

        return $inscription->refresh();
    }

    private function genererCodeUnique(): string
    {
        do {
            $code = 'JFCI-'.Str::upper(Str::random(10));
        } while (InscriptionEvenement::query()->where('code_inscription', $code)->exists());

        return $code;
    }
}
