<?php

namespace App\Services;

use App\Models\ParametreSite;
use Illuminate\Database\Eloquent\Collection;

class ParametreSiteService
{
    public function recupererTous(): Collection
    {
        return ParametreSite::query()->get();
    }

    public function modifier(string $cle, ?string $valeur, ?string $groupe = null): ParametreSite
    {
        return ParametreSite::query()->updateOrCreate(
            ['cle' => $cle],
            ['valeur' => $valeur, 'groupe' => $groupe],
        );
    }
}
