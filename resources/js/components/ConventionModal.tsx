import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const CONVENTION_MODAL_SESSION_KEY = 'convention-modal-dismissed';
const OPEN_DELAY_MS = 1800;

export default function ConventionModal(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (window.sessionStorage.getItem(CONVENTION_MODAL_SESSION_KEY) === '1') {
            return;
        }

        const timer = window.setTimeout(() => {
            setIsOpen(true);
            window.setTimeout(() => {
                setIsVisible(true);
            }, 20);
        }, OPEN_DELAY_MS);

        return () => {
            window.clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const closeModal = (): void => {
        setIsVisible(false);

        window.setTimeout(() => {
            setIsOpen(false);
        }, 180);

        window.sessionStorage.setItem(CONVENTION_MODAL_SESSION_KEY, '1');
    };

    if (!isOpen) {
        return <></>;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6">
            <button
                type="button"
                aria-label="Fermer la fenêtre d'annonce"
                onClick={closeModal}
                className={`absolute inset-0 bg-black/65 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />

            <div
                className={`relative z-10 w-[92vw] max-w-2xl overflow-hidden rounded-2xl border border-[#D5BC7A]/45 bg-[#FCF7EF] text-black shadow-2xl transition-all duration-200 max-h-[88vh] sm:w-full sm:max-h-[95vh] ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="convention-modal-title"
            >
                <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Fermer"
                    className="absolute top-2 right-2 z-20 rounded-full bg-black/80 p-1.5 text-white transition hover:bg-black sm:top-3 sm:right-3 sm:p-2"
                >
                    ✕
                </button>

                <img
                    src="/images/IMAGE CONVENTION.jpg"
                    alt="Affiche de la convention"
                    className="max-h-[44vh] w-full object-contain bg-black sm:max-h-[65vh]"
                />

                <div className="space-y-2.5 p-3.5 sm:space-y-4 sm:p-6">
                    <h2 id="convention-modal-title" className="text-base font-semibold tracking-tight text-[#191400] sm:text-2xl">
                        La convention JFCI approche
                    </h2>
                    <p className="text-xs text-[#3D3323] sm:text-base">
                        Réservez votre place dès maintenant et vivez cette édition avec nous.
                    </p>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                        <Link
                            href="/inscription"
                            className="inline-flex items-center justify-center rounded-xl bg-[#C9A24A] px-3.5 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition hover:bg-[#B68E3A] sm:px-5 sm:py-3"
                        >
                            S’inscrire à la convention
                        </Link>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="inline-flex items-center justify-center rounded-xl border border-[#1C1C1A]/20 px-3.5 py-2 text-sm font-medium text-[#1C1C1A] transition hover:bg-white sm:px-5 sm:py-3"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
