import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface ValueCard {
    src: string;
    title: string;
}

const valueCards: ValueCard[] = [
    {
        src: '/images/image  (1).jpg',
        title: 'Adoration',
    },
    {
        src: '/images/image  (4).jpg',
        title: 'Unité',
    },
    {
        src: '/images/image  (5).jpg',
        title: 'Mission',
    },
    {
        src: '/images/image 2 .jpg',
        title: 'Impact',
    },
];

export default function LookbackHero() {
    return (
        <section className="py-6 lg:py-8">
            <div className="mx-auto max-w-[1550px] rounded-[40px] border border-[#ece8df] bg-white px-6 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] lg:px-10 lg:py-8">
                <div className="grid gap-8 xl:grid-cols-[0.9fr_1.45fr]">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-3">
                            <p className="font-mono text-[11px] font-semibold tracking-[0.22em] text-[#b8811f] uppercase">
                                FOI • UNITÉ • MISSION • IMPACT
                            </p>
                            <h1 className="mt-5 font-['Anton'] text-[3rem] leading-[0.85] tracking-tight uppercase sm:text-[4.15rem]">
                                <span className="block text-[#0a0a0a]">JEUNESSE</span>
                                <span className="block text-[#0a0a0a]">FOURSQUARE</span>
                                <span className="block text-[#ef1f33]">COTE D&apos;IVOIRE</span>
                            </h1>

                            <div className="mt-5 h-[2px] w-14 bg-[#b8811f]" />
                            <p className="mt-5 max-w-md text-base text-[#2f2f2f]">
                                Une génération appelée à adorer, servir, se connecter et impacter le monde pour Christ.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/convention-2026"
                                className="inline-flex items-center gap-2 rounded-md bg-[#bf8b25] px-5 py-3 text-sm font-semibold text-white uppercase transition hover:opacity-90"
                            >
                                PARTICIPER À LA CONVENTION
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/a-propos"
                                className="inline-flex items-center gap-2 rounded-md border border-[#111] px-5 py-3 text-sm font-semibold text-[#111] uppercase transition hover:bg-black/5"
                            >
                                DÉCOUVRIR LE MOUVEMENT
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <article className="overflow-hidden rounded-2xl border border-[#ece8df] bg-[#faf8f2] p-2">
                            <img
                                src="/images/image 7.jpg"
                                alt="Foule de jeunes en louange pendant le rassemblement"
                                className="h-[300px] w-full rounded-xl object-cover md:h-[400px]"
                            />
                        </article>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {valueCards.map((card) => (
                                <article
                                    key={card.src}
                                    className="group relative overflow-hidden rounded-2xl border border-[#ece8df] bg-[#faf8f2] p-2"
                                >
                                    <img
                                        src={card.src}
                                        alt={`Galerie jeunesse foursquare - ${card.title}`}
                                        className="h-[180px] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02] md:h-[210px]"
                                    />
                                    <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white uppercase">
                                        {card.title}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}