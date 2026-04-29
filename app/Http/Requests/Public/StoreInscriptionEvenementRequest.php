<?php

namespace App\Http\Requests\Public;

use Illuminate\Foundation\Http\FormRequest;

class StoreInscriptionEvenementRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nom' => ['required', 'string', 'max:255'],
            'prenom' => ['required', 'string', 'max:255'],
            'date_naissance' => ['nullable', 'date'],
            'sexe' => ['required', 'in:homme,femme'],
            'est_chretien_foursquare' => ['required', 'boolean'],
            'district' => ['nullable', 'string', 'max:255', 'required_if:est_chretien_foursquare,1'],
            'eglise_locale' => ['nullable', 'string', 'max:255', 'required_if:est_chretien_foursquare,1'],
            'email' => ['nullable', 'email', 'max:255'],
            'telephone' => ['required', 'string', 'max:255'],
        ];
    }
}
