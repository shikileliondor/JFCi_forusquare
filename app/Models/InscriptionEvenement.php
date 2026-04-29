<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InscriptionEvenement extends Model
{
    use HasFactory;

    protected $table = 'inscriptions_evenements';

    protected $fillable = [
        'evenement_id',
        'nom',
        'prenom',
        'date_naissance',
        'sexe',
        'est_chretien_foursquare',
        'district',
        'eglise_locale',
        'email',
        'telephone',
        'code_inscription',
        'date_inscription',
        'statut_paiement',
    ];

    protected function casts(): array
    {
        return [
            'date_naissance' => 'date',
            'date_inscription' => 'datetime',
            'est_chretien_foursquare' => 'boolean',
        ];
    }

    public function evenement(): BelongsTo
    {
        return $this->belongsTo(Evenement::class);
    }
}
