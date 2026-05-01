import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const viewportOptions = { once: true, amount: 0.25 };

const fadeUpVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function PresidentMessageSection() {
    return (
        <section className="bg-[#efede8] px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
            <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    transition={{ staggerChildren: 0.1 }}
                    className="order-1 lg:pr-10"
                >
                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-4 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#c49f52]"
                    >
                        <span className="h-px w-10 bg-[#c49f52]" />
                        MOT DU PRÉSIDENT
                    </motion.p>

                    <motion.h2
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[22ch] text-[2rem] font-semibold leading-[1.1] tracking-tight text-black sm:text-[2.4rem]"
                    >
                        Une génération engagée pour Christ.
                    </motion.h2>

                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 max-w-[56ch] text-[1rem] leading-[1.85] text-black/75"
                    >
                        La Jeunesse Foursquare Côte d&apos;Ivoire est bien plus qu&apos;un cadre
                        d&apos;activités. C&apos;est une génération appelée à grandir dans la foi, à
                        servir avec amour et à impacter son environnement pour Christ.
                    </motion.p>

                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 max-w-[56ch] text-[1rem] leading-[1.85] text-black/75"
                    >
                        Notre vision est de voir des jeunes transformés, conscients de leur
                        identité en Dieu et engagés dans leur mission.
                    </motion.p>

                    <motion.p
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 max-w-[56ch] text-[1rem] leading-[1.85] text-black/75"
                    >
                        Je vous invite à faire partie de ce mouvement et à vivre pleinement ce
                        que Dieu a préparé pour vous.
                    </motion.p>

                    <motion.blockquote
                        variants={fadeUpVariant}
                        transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 max-w-[40ch] border-l-2 border-[#c49f52] pl-5 text-[1.2rem] font-medium italic leading-[1.6] text-black"
                    >
                        “Une génération transformée peut transformer une nation.”
                    </motion.blockquote>

                    <motion.div
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8"
                    >
                        <Link
                            href="/a-propos"
                            className="inline-flex items-center gap-2 rounded-full bg-[#c49f52] px-7 py-[11px] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_28px_-16px_rgba(196,159,82,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b28f48] hover:shadow-[0_0_0_1px_rgba(196,159,82,0.45),0_18px_34px_-15px_rgba(178,143,72,0.95),0_0_24px_2px_rgba(196,159,82,0.3)]"
                        >
                            Découvrir la vision
                            <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.figure
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOptions}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="group order-2 w-full"
                >
                    <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_30px_55px_-28px_rgba(0,0,0,0.45)]">
                        <img
                            src="/images/president.jpg"
                            alt="Portrait officiel du président de la JFCI"
                            className="h-[480px] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03] sm:h-[560px]"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-6 pb-6 pt-16 text-white">
                            <p className="text-[1.5rem] font-semibold leading-tight">
                                M. Jean-Claude Kassi BROU
                            </p>
                            <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/90">
                                Président de la JFCI
                            </p>
                        </div>
                    </div>
                </motion.figure>
            </div>
        </section>
    );
}
