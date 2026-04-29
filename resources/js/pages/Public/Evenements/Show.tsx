import { Head, Link } from '@inertiajs/react';

export default function Show({ evenement }: { evenement: { titre: string; slug: string; description?: string | null } }) {
    return (
        <>
            <Head title={evenement.titre} />
            <div className="mx-auto max-w-5xl p-6 space-y-4">
                <h1 className="text-2xl font-bold">{evenement.titre}</h1>
                <p>{evenement.description}</p>
                <Link className="text-blue-600" href={`/evenements/${evenement.slug}/inscription`}>S'inscrire</Link>
            </div>
        </>
    );
}
