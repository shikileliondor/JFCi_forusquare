import { Link } from '@inertiajs/react';
import { ArrowRight, Globe, Hand, Heart, Users } from 'lucide-react';

interface ValueCard {
    src: string;
    title: string;
}

const valueCards: ValueCard[] = [
    { src: '/images/image  (1).jpg', title: 'Adoration' },
    { src: '/images/image  (4).jpg', title: 'Unité' },
    { src: '/images/image  (5).jpg', title: 'Mission' },
    { src: '/images/image 2 .jpg', title: 'Impact' },
];

const pillars = [
    { icon: Heart, label: 'ADORER', desc: 'Célébrer Dieu ensemble' },
    { icon: Hand, label: 'SERVIR', desc: 'Des mains pour aimer' },
    { icon: Users, label: "S'UNIR", desc: 'Une génération unie' },
    { icon: Globe, label: 'IMPACTER', desc: 'Le monde pour Christ' },
];

const titleLines = ['JEUNESSE', 'FOURSQUARE', "COTE D'IVOIRE"];

const textLines = [
    { prefix: 'Une génération qui ', highlight: 'adore.' },
    { prefix: 'Une famille qui ', highlight: 'sert.' },
    {
        prefix: 'Un peuple qui ',
        highlight: 'impacte le monde',
        suffix: ' pour Christ.',
    },
];

export default function LookbackHero() {
    return (
        <section className="py-6 lg:py-8">
            <style>{`
                @keyframes heroFadeUp {
                    from { opacity: 0; transform: translate3d(0, 22px, 0); }
                    to { opacity: 1; transform: translate3d(0, 0, 0); }
                }
                @keyframes heroDrawLine {
                    from { transform: scaleX(0); opacity: 0.6; }
                    to { transform: scaleX(1); opacity: 1; }
                }
                @keyframes heroImageReveal {
                    from { opacity: 0; transform: scale(1.08); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes heroButtonGlow {
                    0% { box-shadow: 0 0 0 rgba(191, 139, 37, 0); }
                    60% { box-shadow: 0 0 24px rgba(191, 139, 37, 0.32); }
                    100% { box-shadow: 0 0 0 rgba(191, 139, 37, 0); }
                }
                .hero-animate { opacity: 0; animation: heroFadeUp 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .hero-title-line:nth-child(1) { animation-delay: 0.08s; }
                .hero-title-line:nth-child(2) { animation-delay: 0.2s; }
                .hero-title-line:nth-child(3) { animation-delay: 0.32s; }
                .hero-text-line:nth-child(1) { animation-delay: 0.5s; }
                .hero-text-line:nth-child(2) { animation-delay: 0.63s; }
                .hero-text-line:nth-child(3) { animation-delay: 0.76s; }
                .hero-draw-line { transform-origin: left; animation: heroDrawLine 0.95s ease forwards; animation-delay: 0.44s; }
                .hero-main-image { opacity: 0; animation: heroImageReveal 1.15s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.2s; }
                .hero-card { opacity: 0; animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .hero-card:nth-child(1) { animation-delay: 0.45s; }
                .hero-card:nth-child(2) { animation-delay: 0.57s; }
                .hero-card:nth-child(3) { animation-delay: 0.69s; }
                .hero-card:nth-child(4) { animation-delay: 0.81s; }
                .hero-icon { opacity: 0; transform: scale(0.94); animation: heroFadeUp 0.58s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .hero-icon:nth-child(1) { animation-delay: 0.72s; }
                .hero-icon:nth-child(2) { animation-delay: 0.81s; }
                .hero-icon:nth-child(3) { animation-delay: 0.9s; }
                .hero-icon:nth-child(4) { animation-delay: 0.99s; }
                .hero-cta { animation: heroButtonGlow 1.5s ease-out 0.9s 1 both; }
            `}</style>
            <div className="mx-auto max-w-[1420px] rounded-[40px] border border-[#ece8df] bg-white px-6 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] lg:px-10 lg:py-8">
                <div className="grid gap-8 xl:grid-cols-[0.9fr_1.45fr]">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-3">
                            <p className="hero-animate font-mono text-[11px] font-semibold tracking-[0.22em] text-[#b8811f] uppercase">
                                FOI • UNITÉ • MISSION • IMPACT
                            </p>
                            <h1 className="mt-5 font-['Anton'] text-[2.7rem] leading-[0.95] tracking-tight uppercase sm:text-[3.75rem]">
                                {titleLines.map((line, index) => (
                                    <span
                                        key={line}
                                        className={`hero-animate hero-title-line block ${index === 2 ? 'text-[#ef1f33]' : 'text-[#0a0a0a]'}`}
                                    >
                                        {line}
                                    </span>
                                ))}
                            </h1>

                            <div className="hero-draw-line mt-5 h-[2px] w-14 bg-[#b8811f]" />

                            <p className="mt-5 max-w-md text-[1.12rem] leading-[1.65] text-[#1a1a1a]">
                                {textLines.map((line) => (
                                    <span
                                        key={line.highlight}
                                        className="hero-animate hero-text-line block"
                                    >
                                        {line.prefix}
                                        <strong>{line.highlight}</strong>
                                        {line.suffix ?? ''}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <p
                            className="hero-animate mt-4 max-w-md text-[1rem] leading-relaxed text-[#5a5a5a]"
                            style={{ animationDelay: '0.9s' }}
                        >
                            Un mouvement de jeunes passionnés, appelés à adorer
                            Dieu, servir leur prochain et impacter le monde pour
                            Christ.
                        </p>

                        <div className="mt-6 grid grid-cols-4 gap-3">
                            {pillars.map(({ icon: Icon, label, desc }) => (
                                <div
                                    key={label}
                                    className="hero-icon flex flex-col items-center gap-2 text-center"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#b8811f] text-[#b8811f]">
                                        <Icon size={19} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[11px] font-bold tracking-[0.1em] text-[#0a0a0a] uppercase">
                                        {label}
                                    </span>
                                    <span className="text-[11px] leading-tight text-[#7a7a7a]">
                                        {desc}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/convention-2026"
                                className="hero-cta inline-flex items-center gap-2 rounded-md bg-[#bf8b25] px-5 py-3 text-sm font-semibold text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#aa7b1f] hover:shadow-[0_10px_26px_rgba(191,139,37,0.22)]"
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
                        <article className="relative overflow-hidden rounded-2xl border border-[#ece8df] bg-[#faf8f2] p-2">
                            <img
                                src="/images/image 7.jpg"
                                alt="Foule de jeunes en louange pendant le rassemblement"
                                className="hero-main-image h-[270px] w-full rounded-xl object-cover md:h-[360px]"
                            />
                        </article>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {valueCards.map((card) => (
                                <article
                                    key={card.src}
                                    className="hero-card group relative overflow-hidden rounded-2xl border border-[#ece8df] bg-[#faf8f2] p-2 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                                >
                                    <img
                                        src={card.src}
                                        alt={`Galerie jeunesse foursquare - ${card.title}`}
                                        className="h-[180px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03] md:h-[210px]"
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
