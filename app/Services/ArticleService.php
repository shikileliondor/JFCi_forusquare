<?php

namespace App\Services;

use App\Models\Article;
use App\Support\GenerateurSlug;

class ArticleService
{
    public function __construct(private readonly GenerateurSlug $generateurSlug) {}

    public function creer(array $donnees): Article
    {
        $donnees['slug'] = $this->generateurSlug->genererUnique($donnees['titre'], Article::class);

        return Article::create($donnees);
    }

    public function modifier(Article $article, array $donnees): Article
    {
        if (array_key_exists('titre', $donnees) && $donnees['titre'] !== $article->titre) {
            $donnees['slug'] = $this->generateurSlug->genererUnique($donnees['titre'], Article::class, $article->id);
        }

        $article->update($donnees);

        return $article->refresh();
    }

    public function supprimer(Article $article): bool
    {
        return (bool) $article->delete();
    }
}
