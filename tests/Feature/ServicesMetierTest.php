<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\Evenement;
use App\Services\ArticleService;
use App\Services\InscriptionEvenementService;
use App\Support\GenerateurSlug;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServicesMetierTest extends TestCase
{
    use RefreshDatabase;

    public function test_generateur_slug_genere_un_slug_unique(): void
    {
        Article::query()->create([
            'titre' => 'Camp National',
            'slug' => 'camp-national',
            'contenu' => 'Contenu test',
            'statut' => 'brouillon',
        ]);

        $slug = app(GenerateurSlug::class)->genererUnique('Camp National', Article::class);

        $this->assertSame('camp-national-1', $slug);
    }

    public function test_inscription_service_force_les_champs_automatiques(): void
    {
        $evenement = Evenement::query()->create([
            'titre' => 'Retraite 2026',
            'slug' => 'retraite-2026',
            'statut' => 'brouillon',
        ]);

        $inscription = app(InscriptionEvenementService::class)->creer([
            'evenement_id' => $evenement->id,
            'nom' => 'Doe',
            'prenom' => 'John',
            'sexe' => 'homme',
            'telephone' => '0700000000',
            'statut_paiement' => 'payee',
        ]);

        $this->assertSame('non_payee', $inscription->statut_paiement);
        $this->assertNotNull($inscription->date_inscription);
        $this->assertStringStartsWith('JFCI-', $inscription->code_inscription);
    }

    public function test_article_service_genere_le_slug_a_la_creation(): void
    {
        $article = app(ArticleService::class)->creer([
            'titre' => 'Assemblée Générale',
            'resume' => 'Résumé',
            'contenu' => 'Contenu complet',
            'statut' => 'brouillon',
        ]);

        $this->assertSame('assemblee-generale', $article->slug);
    }
}
