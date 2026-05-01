import { motion } from 'framer-motion';
import { Flame, Gem, Target, Users } from 'lucide-react';

interface VisionCard {
    title: string;
    description: string;
    icon: typeof Flame;
}

const visionCards: VisionCard[] = [
    {
        title: 'FOI',
        description: 'Grandir dans une relation personnelle avec Dieu',
        icon: Flame,
    },
    {
        title: 'UNITÉ',
        description: 'Construire une génération connectée et solidaire',
        icon: Users,
    },
    {
        title: 'MISSION',
        description: 'Servir, évangéliser et agir avec impact',
        icon: Target,
    },
    {
        title: 'IMPACT',
        description: 'Transformer la société par Christ',
        icon: Gem,
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function NotreVisionSection() {
    return (
        <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto grid w-full max-w-[1240px] gap-10 rounded-[32px] border border-[#ecd8b2] bg-white p-6 shadow-[0_24px_56px_rgba(0,0,0,0.08)] md:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5"
                >
                    <span className="inline-flex rounded-full border border-[#b3892f]/40 bg-[#fff8ea] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#b3892f] uppercase">
                        NOTRE VISION
                    </span>

                    <h2 className="text-2xl leading-tight font-semibold text-black sm:text-3xl lg:text-[2.05rem]">
                        Former une génération enracinée dans la foi, unie dans
                        l’amour et engagée pour impacter le monde pour Christ.
                    </h2>

                    <p className="max-w-[58ch] text-sm leading-relaxed text-black/70 sm:text-base">
                        La Jeunesse Foursquare Côte d’Ivoire est le département
                        jeunesse de l’Église Foursquare Côte d’Ivoire. Elle a
                        pour mission d’accompagner, former et mobiliser les
                        jeunes pour vivre pleinement leur foi et influencer leur
                        génération.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-4 sm:grid-cols-2"
                >
                    {visionCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <motion.article
                                key={card.title}
                                variants={cardVariants}
                                className="group rounded-2xl border border-black/10 bg-[#fcfbf8] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-[#be192f]/30 hover:shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
                            >
                                <motion.div
                                    initial={{ scale: 0.92, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.35, delay: 0.1 }}
                                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b3892f]/35 bg-white text-[#be192f]"
                                >
                                    <Icon size={20} strokeWidth={1.8} />
                                </motion.div>

                                <h3 className="text-base font-semibold tracking-[0.14em] text-black uppercase">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-black/65">
                                    {card.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
