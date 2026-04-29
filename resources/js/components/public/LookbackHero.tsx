import { Link } from '@inertiajs/react';

type ArchiveItem = {
    src: string;
    alt: string;
    className: string;
    fallback: string;
};

const archiveItems: ArchiveItem[] = [
    {
        src: '/images/jfci-archive-1.jpg',
        alt: 'Archive JFCI 1',
        className: 'h-[220px] w-[170px] self-end md:h-[260px] md:w-[200px] lg:h-[300px] lg:w-[220px] md:-mb-8',
        fallback: 'JFCI 2000',
    },
    {
        src: '/images/jfci-archive-2.jpg',
        alt: 'Archive JFCI 2',
        className: 'h-[280px] w-[190px] md:h-[340px] md:w-[240px] lg:h-[380px] lg:w-[260px] md:-mt-6',
        fallback: 'Congrès 2005',
    },
    {
        src: '/images/jfci-archive-3.jpg',
        alt: 'Archive JFCI 3',
        className: 'h-[240px] w-[190px] md:h-[290px] md:w-[230px] lg:h-[320px] lg:w-[250px] md:mt-4',
        fallback: 'Jeunesse 2010',
    },
    {
        src: '/images/jfci-archive-4.jpg',
        alt: 'Archive JFCI 4',
        className: 'h-[300px] w-[200px] md:h-[350px] md:w-[240px] lg:h-[390px] lg:w-[265px] md:-mt-4',
        fallback: 'Vision 2015',
    },
    {
        src: '/images/jfci-archive-5.jpg',
        alt: 'Archive JFCI 5',
        className: 'h-[260px] w-[200px] md:h-[320px] md:w-[250px] lg:h-[360px] lg:w-[290px] md:-mb-6',
        fallback: 'Élan 2025',
    },
];

const timelineYears = ['2000', '2005', '2010', '2015', '2020', '2025'];

export default function LookbackHero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F8F6F1] text-[#071A3D]">
            <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 pb-10 pt-16 md:px-8 md:pb-14 md:pt-20 lg:px-12 lg:pt-24">
                <div className="text-center">
                    <p className="text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.05em] text-[#071A3D] md:text-[8rem] lg:text-[10rem]">
                        JFCI
                    </p>
                    <p className="mt-2 text-[9vw] font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-[4.9rem] lg:text-[6.4rem]">
                        25 Ans d&apos;Histoire
                    </p>
                    <p className="mt-1 text-lg font-semibold uppercase tracking-[0.3em] text-[#071A3D]/80 md:text-2xl">(2000–2025)</p>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-5 lg:mt-12 lg:flex-nowrap lg:gap-6">
                    {archiveItems.map((item, index) => (
                        <article
                            key={item.src}
                            className={`${item.className} group relative shrink-0 overflow-hidden rounded-[6px] bg-[#E8E2D7] shadow-[0_12px_24px_rgba(7,26,61,0.08)] transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4`}
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                className="h-full w-full object-cover"
                                onError={(event) => {
                                    const imageElement = event.currentTarget;
                                    imageElement.style.display = 'none';
                                    const fallbackElement = imageElement.nextElementSibling as HTMLDivElement | null;

                                    if (fallbackElement) {
                                        fallbackElement.classList.remove('hidden');
                                    }
                                }}
                            />
                            <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-[#071A3D] to-[#123C8C] p-4 text-center text-base font-bold uppercase tracking-[0.15em] text-[#F8F6F1]">
                                {item.fallback}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/convention-25-ans"
                        className="inline-flex rounded-full bg-[#F5B400] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#071A3D] transition hover:brightness-95"
                    >
                        Convention 25 ans
                    </Link>
                    <Link
                        href="/histoire"
                        className="inline-flex rounded-full border border-[#071A3D] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#071A3D] transition hover:bg-[#071A3D] hover:text-[#F8F6F1]"
                    >
                        Découvrir l&apos;histoire
                    </Link>
                </div>

                <div className="mt-auto pt-10">
                    <div className="relative mx-auto max-w-6xl">
                        <div className="h-px w-full bg-[#071A3D]/15" />
                        <div className="mt-3 grid grid-cols-6 gap-2">
                            {timelineYears.map((year) => (
                                <div key={year} className="text-center">
                                    <div className="mx-auto mb-2 h-3 w-px bg-[#071A3D]/25" />
                                    <p className="text-xs font-semibold tracking-[0.22em] text-[#071A3D]/75 md:text-sm">{year}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-[#F5B400]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
