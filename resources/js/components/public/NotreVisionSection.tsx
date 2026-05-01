import { ArrowRight, BadgeCheck } from 'lucide-react';

import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';

interface VisionPoint {
    title: string;
    description: string;
}

const visionPoints: VisionPoint[] = [
    {
        title: 'FOI',
        description: 'Grandir dans une relation personnelle avec Dieu',
    },
    {
        title: 'UNITÉ',
        description: 'Construire une génération connectée et solidaire',
    },
    {
        title: 'MISSION',
        description: 'Servir, évangéliser et agir avec impact',
    },
    {
        title: 'IMPACT',
        description: 'Transformer la société par Christ',
    },
];

export default function NotreVisionSection() {
    return (
        <section className="bg-[#efede8] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <div className="mx-auto grid w-full max-w-[1580px] gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
                <div className="overflow-hidden">
                    <img
                        src="/images/image 7.jpg"
                        alt="Jeunes de la JFCI en pleine activité"
                        className="h-full min-h-[340px] w-full object-cover lg:min-h-[640px]"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="mb-5 inline-flex items-center gap-4 text-[11px] font-semibold tracking-[0.22em] text-[#c49f52] uppercase">
                        <span className="h-px w-14 bg-[#c49f52]" />
                        NOTRE VISION
                    </p>

                    <h2 className="text-4xl leading-[1.04] font-semibold tracking-tight text-[#111] sm:text-5xl">
                        Une jeunesse de précision,
                        <span className="text-[#c49f52]"> ancrée en Christ.</span>
                    </h2>

                    <p className="mt-6 max-w-[68ch] text-[1.05rem] leading-8 text-[#232323]/80">
                        Former une génération enracinée dans la foi, unie dans
                        l’amour et engagée pour impacter le monde pour Christ.
                    </p>

                    <p className="mt-5 max-w-[68ch] text-[1.03rem] leading-8 text-[#232323]/80">
                        La Jeunesse Foursquare Côte d’Ivoire est le département
                        jeunesse de l’Église Foursquare Côte d’Ivoire. Elle
                        accompagne, forme et mobilise les jeunes pour vivre
                        pleinement leur foi et influencer leur génération.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {visionPoints.map((point) => (
                            <article
                                key={point.title}
                                className="border border-[#dad3c6] bg-white/40 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.07)]"
                            >
                                <p className="flex items-center gap-3 text-xl font-semibold text-[#111]">
                                    <BadgeCheck
                                        size={18}
                                        className="text-[#c49f52]"
                                    />
                                    {point.title}
                                </p>
                                <p className="mt-1 text-base leading-relaxed text-[#262626]/75">
                                    {point.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="/a-propos"
                            className="inline-flex items-center gap-2 border border-[#1c1c1c] px-8 py-3 text-sm font-semibold tracking-[0.14em] text-[#1c1c1c] uppercase transition hover:bg-black/5"
                        >
                            Notre histoire
                            <ArrowRight size={15} />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#c49f52] px-8 py-3 text-sm font-semibold tracking-[0.14em] text-white uppercase transition hover:bg-[#b28f48]"
                        >
                            Contact
                            <ArrowRight size={15} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-[#dad3c6] pt-8">
                <Hero />
            </div>
        </section>
    );
}
