import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function NotreVisionSection() {
    return (
        <section className="bg-[#efede8] px-5 py-14 sm:px-8 lg:px-16 lg:py-16">
           <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-24 lg:pl-24">
                <div className="w-full shrink-0 overflow-hidden rounded-3xl lg:w-[380px]">
                    <img
                        src="/images/image .jpg"
                        alt="Jeunes de la JFCI en pleine activité"
                       className="h-[440px] w-full object-contain bg-[#efede8]"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="mb-4 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#c49f52]">
                        <span className="h-px w-10 bg-[#c49f52]" />
                        À PROPOS DE LA JFCI
                    </p>

                    <h2 className="max-w-[26ch] text-[2rem] font-semibold leading-[1.1] tracking-tight text-[#111] sm:text-[2.4rem]">
                        Le département jeunesse de{' '}
                        <span className="text-[#c49f52]">
                            l&apos;Église Foursquare Côte d&apos;Ivoire.
                        </span>
                    </h2>

                    <span className="my-5 block h-px w-12 bg-[#c49f52]/40" />

                    <p className="max-w-[48ch] text-[1rem] leading-[1.85] text-[#2a2a2a]/75">
                        La Jeunesse Foursquare Côte d&apos;Ivoire accompagne, forme et mobilise
                        les jeunes pour vivre pleinement leur foi, servir leur prochain et
                        impacter leur génération pour Christ.
                    </p>

                    <p className="mt-4 max-w-[48ch] text-[1rem] leading-[1.85] text-[#2a2a2a]/75">
                        Elle rassemble une jeunesse passionnée autour de la foi, de
                        l&apos;unité, de la mission et de l&apos;impact.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/a-propos"
                            className="inline-flex items-center gap-2 border border-[#1c1c1c] px-7 py-[11px] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#1c1c1c] transition hover:bg-black/5"
                        >
                            Notre histoire
                            <ArrowRight size={14} />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#c49f52] px-7 py-[11px] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b28f48]"
                        >
                            Contact
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}