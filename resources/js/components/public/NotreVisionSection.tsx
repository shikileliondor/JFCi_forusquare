import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const viewportOptions = { once: true, amount: 0.25 };

const fadeUpVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function NotreVisionSection() {
    return (
        <section className="bg-[#efede8] px-5 py-14 sm:px-8 lg:px-16 lg:py-16">
            <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-24 lg:pl-24">
                <motion.div
                    initial={{ opacity: 0, x: -28, scale: 1.06 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={viewportOptions}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative w-full shrink-0 overflow-hidden rounded-[2rem] border border-white/60 bg-white/30 p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-700 hover:shadow-[0_30px_80px_-30px_rgba(196,159,82,0.55)] lg:w-[420px]"
                >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#c49f52]/20 opacity-80" />
                    <div className="pointer-events-none absolute -inset-x-12 -top-20 h-28 rotate-12 bg-white/45 blur-2xl transition duration-700 group-hover:translate-y-16" />
                    <div className="overflow-hidden rounded-[1.45rem]">
                        <img
                            src="/images/image .jpg"
                            alt="Jeunes de la JFCI en pleine activité"
                            className="h-[470px] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    transition={{ staggerChildren: 0.14 }}
                    className="flex flex-col justify-center"
                >
                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-4 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#c49f52]"
                    >
                        <motion.span
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            whileInView={{ scaleX: 1 }}
                            viewport={viewportOptions}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                            className="h-px w-10 bg-[#c49f52]"
                        />
                        À PROPOS DE LA JFCI
                    </motion.p>

                    <h2 className="max-w-[26ch] text-[2rem] font-semibold leading-[1.1] tracking-tight text-[#111] sm:text-[2.4rem]">
                        <motion.span
                            variants={fadeUpVariant}
                            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block"
                        >
                            Le département jeunesse de{' '}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOptions}
                            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block text-[#c49f52]"
                        >
                            l&apos;Église Foursquare Côte d&apos;Ivoire.
                        </motion.span>
                    </h2>

                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: '3rem' }}
                        viewport={viewportOptions}
                        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="my-5 block h-px bg-[#c49f52]/40"
                    />

                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[48ch] text-[1rem] leading-[1.85] text-[#2a2a2a]/75"
                    >
                        La Jeunesse Foursquare Côte d&apos;Ivoire accompagne, forme et mobilise
                        les jeunes pour vivre pleinement leur foi, servir leur prochain et
                        impacter leur génération pour Christ.
                    </motion.p>

                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 max-w-[48ch] text-[1rem] leading-[1.85] text-[#2a2a2a]/75"
                    >
                        Elle rassemble une jeunesse passionnée autour de la foi, de
                        l&apos;unité, de la mission et de l&apos;impact.
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <Link
                            href="/a-propos"
                            className="inline-flex items-center gap-2 rounded-full border border-[#1c1c1c] px-7 py-[11px] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#1c1c1c] shadow-[0_8px_22px_-18px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:shadow-[0_14px_28px_-16px_rgba(0,0,0,0.4)]"
                        >
                            Notre histoire
                            <ArrowRight size={14} />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#c49f52] px-7 py-[11px] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_28px_-16px_rgba(196,159,82,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b28f48] hover:shadow-[0_0_0_1px_rgba(196,159,82,0.45),0_18px_34px_-15px_rgba(178,143,72,0.95),0_0_24px_2px_rgba(196,159,82,0.3)]"
                        >
                            Contact
                            <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
