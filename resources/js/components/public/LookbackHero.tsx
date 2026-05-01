import { Link } from '@inertiajs/react';
import { ArrowRight, Heart, Hand, Users, Globe } from 'lucide-react';

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

export default function LookbackHero() {
    return (
        <section className="py-6 lg:py-8">
            <div className="mx-auto max-w-[1550px] rounded-[40px] border border-[#ece8df] bg-white px-6 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] lg:px-10 lg:py-8">
                <div className="grid gap-8 xl:grid-cols-[0.9fr_1.45fr]">

                    {/* Colonne gauche */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-3">
                            <p className="font-mono text-[11px] font-semibold tracking-[0.22em] text-[#b8811f] uppercase">
                                FOI • UNITÉ • MISSION • IMPACT
                            </p>
                            <h1 className="mt-5 font-['Anton'] text-[3rem] leading-[0.95] tracking-tight uppercase sm:text-[4.15rem]">
                                <span className="block text-[#0a0a0a]">JEUNESSE</span>
                                <span className="block text-[#0a0a0a]">FOURSQUARE</span>
                                <span className="block text-[#ef1f33]">COTE D{'\''}IVOIRE</span>
                            </h1>

                            <div className="mt-5 h-[2px] w-14 bg-[#b8811f]" />

                            <p className="mt-5 max-w-md text-[1.12rem] leading-[1.65] text-[#1a1a1a]">
                                Une génération qui <strong>adore.</strong><br />
                                Une famille qui <strong>sert.</strong><br />
                                Un peuple qui <strong>impacte le monde</strong><br />
                                <span style={{ fontFamily: "'Great Vibes', cursive", color: '#b8811f', fontSize: '1.9rem' }}>
    pour Christ.
</span>
                            </p>
                        </div>

                     <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-[#5a5a5a]">
    Un mouvement de jeunes passionnés, appelés à adorer Dieu, servir leur prochain et impacter le monde pour Christ.
</p>

                        <div className="mt-6 grid grid-cols-4 gap-3">
                            {pillars.map(({ icon: Icon, label, desc }) => (
                                <div key={label} className="flex flex-col items-center gap-2 text-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#b8811f] text-[#b8811f]">
                                        <Icon size={19} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[11px] font-bold tracking-[0.1em] text-[#0a0a0a] uppercase">{label}</span>
                                    <span className="text-[11px] leading-tight text-[#7a7a7a]">{desc}</span>
                                </div>
                            ))}
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

                    {/* Colonne droite */}
                    <div className="space-y-3">
                        <article className="relative overflow-hidden rounded-2xl border border-[#ece8df] bg-[#faf8f2] p-2">
                            <img
                                src="/images/image 7.jpg"
                                alt="Foule de jeunes en louange pendant le rassemblement"
                                className="h-[300px] w-full rounded-xl object-cover md:h-[400px]"
                            />
                            {/* <div className="absolute bottom-6 left-6 max-w-[200px] rounded-xl bg-[#1a2a3a]/90 p-4 text-white">
                                <span className="mb-2 block text-2xl font-bold leading-none text-[#b8811f]">{'"'}</span>
                                <p className="text-[13px] font-semibold leading-snug">
                                    Vous êtes la lumière du monde. Que votre lumière brille devant les hommes.
                                </p>
                                <p className="mt-2 text-[11px] font-bold tracking-widest text-[#b8811f] uppercase">
                                    Matthieu 5:14-16
                                </p>
                            </div> */}
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