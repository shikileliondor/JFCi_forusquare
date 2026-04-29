<?php

namespace Tests\Feature;

use App\Models\Evenement;
use App\Models\InscriptionEvenement;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicAdminRoutingTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_home_is_accessible(): void
    {
        $this->get('/')->assertOk();
    }

    public function test_guest_is_redirected_to_admin_login(): void
    {
        $this->get('/admin/dashboard')->assertRedirect('/admin/login');
    }

    public function test_public_event_registration_creates_unpaid_record(): void
    {
        $evenement = Evenement::query()->create([
            'titre' => 'Camp',
            'slug' => 'camp',
            'statut' => 'publie',
        ]);

        $this->post("/evenements/{$evenement->slug}/inscription", [
            'nom' => 'Doe',
            'prenom' => 'John',
            'sexe' => 'homme',
            'est_chretien_foursquare' => false,
            'telephone' => '0102030405',
        ])->assertRedirect();

        $this->assertDatabaseHas('inscriptions_evenements', [
            'evenement_id' => $evenement->id,
            'nom' => 'Doe',
            'statut_paiement' => 'non_payee',
        ]);
    }

    public function test_admin_can_mark_registration_as_paid(): void
    {
        $admin = User::factory()->create();
        $evenement = Evenement::query()->create([
            'titre' => 'Retraite',
            'slug' => 'retraite',
            'statut' => 'publie',
        ]);
        $inscription = InscriptionEvenement::query()->create([
            'evenement_id' => $evenement->id,
            'nom' => 'Kouassi',
            'prenom' => 'Paul',
            'sexe' => 'homme',
            'est_chretien_foursquare' => false,
            'telephone' => '0700000000',
            'code_inscription' => 'JFCI-TEST-CODE',
            'statut_paiement' => 'non_payee',
            'date_inscription' => now(),
        ]);

        $this->actingAs($admin)
            ->patch("/admin/inscriptions/{$inscription->id}/paiement", ['statut_paiement' => 'payee'])
            ->assertRedirect();

        $this->assertDatabaseHas('inscriptions_evenements', [
            'id' => $inscription->id,
            'statut_paiement' => 'payee',
        ]);
    }
}
