import { Link } from '@inertiajs/react';

const footerNavigation = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Histoire', href: '/histoire' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
] as const;

const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
] as const;

export default function Footer() {
    return (
        <footer className="bg-[#071A3D] text-slate-100">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:px-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5B400] text-sm font-bold text-[#071A3D]">
                            JF
                        </span>
                        <p className="font-['Poppins'] text-sm font-semibold text-white">
                            Jeunesse Foursquare Côte d&apos;Ivoire
                        </p>
                    </div>
                    <p className="font-['Inter'] text-sm leading-relaxed text-slate-300">
                        Une jeunesse engagée pour Christ, active dans
                        l’évangélisation, la communion fraternelle et l’impact
                        social en Côte d’Ivoire.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-['Poppins'] text-sm font-semibold tracking-wide text-[#F5B400] uppercase">
                        Navigation
                    </h3>
                    <ul className="space-y-2">
                        {footerNavigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="font-['Inter'] text-sm text-slate-200 transition-colors duration-300 hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-['Poppins'] text-sm font-semibold tracking-wide text-[#F5B400] uppercase">
                        Contact
                    </h3>
                    <ul className="space-y-2 font-['Inter'] text-sm text-slate-300">
                        <li>Abidjan, Côte d’Ivoire</li>
                        <li>contact@jfci.ci</li>
                        <li>+225 00 00 00 00</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-['Poppins'] text-sm font-semibold tracking-wide text-[#F5B400] uppercase">
                        Réseaux sociaux
                    </h3>
                    <ul className="space-y-2">
                        {socialLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-['Inter'] text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 py-5">
                <p className="text-center font-['Inter'] text-xs text-slate-300">
                    © 2026 JFCI. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
