import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        behance?: string;
    };
}

const DEFAULT_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Chadrack',
        role: 'Director of Photography',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
        social: { twitter: '#', linkedin: '#', behance: '#' },
    },
    {
        id: '2',
        name: 'Mak VieSainte',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        id: '3',
        name: 'Osiris Balonga',
        role: 'Lead Front-End',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        id: '4',
        name: 'Jacques',
        role: 'Product Owner',
        image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=800&q=80',
        social: { linkedin: '#' },
    },
    {
        id: '5',
        name: 'Riche Makso',
        role: 'CTO - Product Designer',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        id: '6',
        name: 'Jemima',
        role: 'Make-Up Artist',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
        social: { instagram: '#' } as TeamMember['social'],
    },
];

interface TeamShowcaseProps {
    members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const col1 = members.filter((_, i) => i % 3 === 0);
    const col2 = members.filter((_, i) => i % 3 === 1);
    const col3 = members.filter((_, i) => i % 3 === 2);

    return (
        <div className="mx-auto flex w-full max-w-5xl select-none flex-col items-start gap-8 px-4 py-8 font-sans md:flex-row md:gap-10 md:px-6 lg:gap-14">
            <div className="flex flex-shrink-0 gap-2 overflow-x-auto pb-1 md:gap-3 md:pb-0">
                <div className="flex flex-col gap-2 md:gap-3">
                    {col1.map((member) => (
                        <PhotoCard
                            key={member.id}
                            member={member}
                            className="h-[120px] w-[110px] sm:h-[140px] sm:w-[130px] md:h-[165px] md:w-[155px]"
                            hoveredId={hoveredId}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>
                <div className="mt-[48px] flex flex-col gap-2 md:gap-3 sm:mt-[56px] md:mt-[68px]">
                    {col2.map((member) => (
                        <PhotoCard
                            key={member.id}
                            member={member}
                            className="h-[132px] w-[122px] sm:h-[155px] sm:w-[145px] md:h-[182px] md:w-[172px]"
                            hoveredId={hoveredId}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>
                <div className="mt-[22px] flex flex-col gap-2 md:gap-3 sm:mt-[26px] md:mt-[32px]">
                    {col3.map((member) => (
                        <PhotoCard
                            key={member.id}
                            member={member}
                            className="h-[125px] w-[115px] sm:h-[146px] sm:w-[136px] md:h-[172px] md:w-[162px]"
                            hoveredId={hoveredId}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>
            </div>

            <div className="w-full flex-1 md:max-w-[420px]">
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_30px_55px_-28px_rgba(0,0,0,0.45)]">
                    <img
                        src="/images/president.jpg"
                        alt="Portrait officiel du président de la JFCI"
                        className="h-[340px] w-full object-cover object-center sm:h-[460px] md:h-[560px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2a0038]/95 via-[#4f0d68]/70 to-transparent px-6 pb-6 pt-16 text-white">
                        <p className="text-[2rem] font-semibold leading-tight sm:text-[2.2rem]">
                            M. Jean-Claude Kassi BROU
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/90">
                            Président de la JFCI
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PhotoCard({
    member,
    className,
    hoveredId,
    onHover,
}: {
    member: TeamMember;
    className: string;
    hoveredId: string | null;
    onHover: (id: string | null) => void;
}) {
    const isActive = hoveredId === member.id;
    const isDimmed = hoveredId !== null && !isActive;

    return (
        <div
            className={cn(
                'cursor-pointer overflow-hidden rounded-xl transition-opacity duration-400 flex-shrink-0',
                className,
                isDimmed ? 'opacity-60' : 'opacity-100',
            )}
            onMouseEnter={() => onHover(member.id)}
            onMouseLeave={() => onHover(null)}
        >
            <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-[filter] duration-500"
                style={{
                    filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
                }}
            />
        </div>
    );
}

