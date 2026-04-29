import InputError from '@/components/input-error';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Inscription({ evenement }: { evenement: { titre: string; slug: string } }) {
    const { flash } = usePage<{ flash?: { success?: string } }>().props;
    const form = useForm({ nom: '', prenom: '', date_naissance: '', sexe: 'homme', est_chretien_foursquare: false, district: '', eglise_locale: '', email: '', telephone: '' });

    return (
        <div className="mx-auto max-w-3xl p-6">
            <Head title={`Inscription - ${evenement.titre}`} />
            <h1 className="text-2xl font-bold mb-4">Inscription à {evenement.titre}</h1>
            {flash?.success && <div className="mb-4 text-green-700">{flash.success}</div>}
            <form onSubmit={(e) => { e.preventDefault(); form.post(`/evenements/${evenement.slug}/inscription`); }} className="space-y-3">
                {['nom', 'prenom', 'district', 'eglise_locale', 'email', 'telephone', 'date_naissance'].map((field) => <input key={field} type="text" placeholder={field} value={(form.data as any)[field]} onChange={(e) => form.setData(field as any, e.target.value)} className="w-full border p-2" />)}
                <select value={form.data.sexe} onChange={(e) => form.setData('sexe', e.target.value as 'homme' | 'femme')} className="w-full border p-2"><option value="homme">Homme</option><option value="femme">Femme</option></select>
                <label className="flex gap-2"><input type="checkbox" checked={form.data.est_chretien_foursquare} onChange={(e) => form.setData('est_chretien_foursquare', e.target.checked)} /> Chrétien Foursquare</label>
                <InputError message={form.errors.nom} />
                <button className="rounded bg-black text-white px-4 py-2" type="submit" disabled={form.processing}>Envoyer</button>
            </form>
        </div>
    );
}
