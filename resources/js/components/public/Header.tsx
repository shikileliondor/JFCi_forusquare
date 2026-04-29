import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigationItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Histoire', href: '/histoire' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
] as const;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm transition-all duration-500">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071A3D] text-sm font-bold text-[#F5B400] shadow-sm">
                        JF
                    </span>
                    <span className="font-['Poppins'] text-sm font-semibold text-[#071A3D] md:text-base">
                        Jeunesse Foursquare Côte d&apos;Ivoire
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-['Inter'] text-sm font-medium text-[#071A3D] transition-colors duration-300 hover:text-[#123C8C]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/convention-25-ans"
                        className="hidden rounded-full bg-[#F5B400] px-5 py-2.5 font-['Inter'] text-sm font-semibold text-[#071A3D] transition-all duration-300 hover:brightness-95 md:inline-flex"
                    >
                        Convention 25 ans
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((state) => !state)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#071A3D] transition-colors duration-300 hover:bg-slate-100 md:hidden"
                        aria-label="Ouvrir le menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`overflow-hidden border-t border-slate-100 bg-white px-4 transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-[460px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            >
                <nav className="flex flex-col gap-3">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-md px-2 py-2 font-['Inter'] text-sm font-medium text-[#071A3D] transition-colors duration-300 hover:bg-slate-50 hover:text-[#123C8C]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/convention-25-ans"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#F5B400] px-4 py-2.5 text-sm font-semibold text-[#071A3D] transition-all duration-300 hover:brightness-95"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Convention 25 ans
                    </Link>
                </nav>
            </div>
        </header>
    );
}
