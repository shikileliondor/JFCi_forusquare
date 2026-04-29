<?php

namespace App\Services;

use App\Models\Galerie;
use App\Support\GenerateurSlug;

class GalerieService
{
    public function __construct(private readonly GenerateurSlug $generateurSlug) {}

    public function creer(array $donnees): Galerie
    {
        $donnees['slug'] = $this->generateurSlug->genererUnique($donnees['titre'], Galerie::class);

        return Galerie::create($donnees);
    }

    public function modifier(Galerie $galerie, array $donnees): Galerie
    {
        if (array_key_exists('titre', $donnees) && $donnees['titre'] !== $galerie->titre) {
            $donnees['slug'] = $this->generateurSlug->genererUnique($donnees['titre'], Galerie::class, $galerie->id);
        }

        $galerie->update($donnees);

        return $galerie->refresh();
    }

    public function supprimer(Galerie $galerie): bool
    {
        return (bool) $galerie->delete();
    }
}
