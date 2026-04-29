import { Head, Link } from '@inertiajs/react';

export default function Index({ evenements }: { evenements: Array<{ id: number; titre: string; slug: string }> }) {
    return (
        <>
            <Head title="Événements" />
            <div className="mx-auto max-w-5xl p-6">
                <h1 className="text-2xl font-bold mb-4">Événements</h1>
                <ul className="space-y-2">
                    {evenements.map((evenement) => (
                        <li key={evenement.id}>
                            <Link className="underline" href={`/evenements/${evenement.slug}`}>{evenement.titre}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
