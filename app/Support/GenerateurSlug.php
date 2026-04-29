<?php

namespace App\Support;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class GenerateurSlug
{
    public function genererUnique(string $titre, string $modelClass, ?int $ignoreId = null): string
    {
        /** @var Model $model */
        $model = new $modelClass();
        $baseSlug = Str::slug($titre);
        $slug = $baseSlug;
        $compteur = 1;

        while ($this->slugExiste($modelClass, $slug, $ignoreId)) {
            $slug = $baseSlug.'-'.$compteur;
            $compteur++;
        }

        return $slug;
    }

    private function slugExiste(string $modelClass, string $slug, ?int $ignoreId = null): bool
    {
        $query = $modelClass::query()->where('slug', $slug);

        if ($ignoreId !== null) {
            $query->whereKeyNot($ignoreId);
        }

        return $query->exists();
    }
}
