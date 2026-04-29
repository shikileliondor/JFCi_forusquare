<?php

namespace App\Services;

use App\Models\Evenement;
use App\Support\GenerateurSlug;

class EvenementService
{
    public function __construct(private readonly GenerateurSlug $generateurSlug) {}

    public function creer(array $donnees): Evenement
    {
        $donnees['slug'] = $this->generateurSlug->genererUnique($donnees['titre'], Evenement::class);

        return Evenement::create($donnees);
    }

    public function modifier(Evenement $evenement, array $donnees): Evenement
    {
        if (array_key_exists('titre', $donnees) && $donnees['titre'] !== $evenement->titre) {
            $donnees['slug'] = $this->generateurSlug->genererUnique($donnees['titre'], Evenement::class, $evenement->id);
        }

        $evenement->update($donnees);

        return $evenement->refresh();
    }

    public function supprimer(Evenement $evenement): bool
    {
        return (bool) $evenement->delete();
    }
}
