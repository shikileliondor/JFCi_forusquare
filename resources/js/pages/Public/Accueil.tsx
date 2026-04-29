import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import PublicLayout from '@/layouts/PublicLayout';

type Evenement = { id: number; titre: string; slug: string; date_debut: string | null };

export default function Accueil({ evenements }: { evenements: Evenement[] }) {
    return (
        <>
            <Head title="Accueil" />

            <section className="min-h-screen bg-[#F8F6F1] px-4 pb-16 pt-28 md:px-8 md:pt-32 lg:px-12 lg:pt-36">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-8">
                        <p className="inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#071A3D]/70 transition-all duration-500">
                            <span className="h-px w-8 bg-[#F5B400]" />
                            JEUNESSE FOURSQUARE CÔTE D&apos;IVOIRE
                        </p>

                        <h1 className="font-heading text-4xl font-semibold leading-[1.02] text-[#071A3D] transition-all duration-700 md:text-6xl lg:text-7xl">
                            Une génération en mouvement <span className="block text-[#F5B400]">pour Christ</span>
                        </h1>

                        <p className="max-w-xl font-sans text-base leading-relaxed text-[#071A3D]/80 md:text-lg transition-opacity duration-700">
                            Depuis 25 ans, la JFCI rassemble, forme et mobilise une jeunesse engagée dans la foi,
                            l&apos;unité, le service et l&apos;impact au sein de la société.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/convention-25-ans"
                                className="inline-flex items-center justify-center rounded-full bg-[#071A3D] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_14px_30px_rgba(7,26,61,0.18)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#0C2A5E]"
                            >
                                Convention 25 ans
                            </Link>
                            <Link
                                href="/histoire"
                                className="inline-flex items-center justify-center rounded-full border border-[#071A3D]/25 bg-white px-7 py-3.5 font-sans text-sm font-semibold text-[#071A3D] transition-all duration-500 hover:border-[#071A3D] hover:-translate-y-0.5"
                            >
                                Découvrir notre histoire
                            </Link>
                        </div>

                        <p className="font-sans text-sm text-[#071A3D]/65">25 ans d&apos;impact · Foi · Unité · Leadership</p>
                    </div>

                    <div className="relative">
                        <div className="pointer-events-none absolute -left-4 top-8 hidden h-32 w-px bg-[#F5B400]/50 lg:block" />

                        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(7,26,61,0.18)] transition-all duration-700">
                            <img
                                src="/images/hero-jfci.jpg"
                                alt="Jeunes de la Jeunesse Foursquare Côte d'Ivoire"
                                className="h-[460px] w-full object-cover md:h-[560px]"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-opacity duration-700 md:left-6">
                            <p className="font-heading text-2xl font-semibold text-[#071A3D]">25 ans</p>
                            <p className="font-sans text-sm text-[#071A3D]/75">d&apos;histoire et d&apos;impact</p>
                        </div>
                    </div>
                </div>

                {evenements.length > 0 ? (
                    <div className="mx-auto mt-14 max-w-7xl">
                        <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[#071A3D]/60">
                            Événements à venir
                        </p>
                        <ul className="grid gap-3 md:grid-cols-2">
                            {evenements.slice(0, 4).map((evenement) => (
                                <li key={evenement.id}>
                                    <Link
                                        href={`/evenements/${evenement.slug}`}
                                        className="block rounded-2xl border border-[#071A3D]/10 bg-white/90 px-5 py-4 font-sans text-[#071A3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5B400]/70"
                                    >
                                        {evenement.titre}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </section>
        </>
    );
}

Accueil.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
