import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';

interface HeroProps {
    images: string[];
}

export default function HeroSection({ images }: HeroProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const safeActiveIndex = useMemo<number>(() => {
        if (images.length === 0) {
            return 0;
        }

        return Math.min(activeIndex, images.length - 1);
    }, [activeIndex, images.length]);

    const mainImage = images[safeActiveIndex] ?? '';

    return (
        <section style={styles.root}>
            <div style={styles.leftColumn}>
                <div style={styles.decorativeLabelRow}>
                    <div style={styles.decorativeLine} />
                    <span style={styles.decorativeLabel}>JEUNESSE FOURSQUARE CÔTE D'IVOIRE</span>
                </div>

                <h1 style={styles.heading}>
                    <span style={styles.headingLine}>Une génération</span>
                    <span style={styles.headingLine}>en mouvement</span>
                    <span style={styles.headingAccent}>pour Christ</span>
                </h1>

                <p style={styles.bodyText}>
                    Depuis 25 ans, la JFCI rassemble, forme et mobilise une jeunesse engagée dans la foi, l'unité,
                    le service et l'impact au sein de la société.
                </p>

                <div style={styles.ctaRow}>
                    <button type="button" style={styles.primaryButton}>
                        Convention 25 ans
                    </button>
                    <button type="button" style={styles.secondaryButton}>
                        Découvrir notre histoire
                    </button>
                </div>

                <p style={styles.tagline}>25 ans d'impact · Foi · Unité · Leadership</p>
            </div>

            <div style={styles.rightColumn}>
                <div style={styles.mainImageArea}>
                    {mainImage !== '' && (
                        <img
                            src={mainImage}
                            alt="Jeunes de la Jeunesse Foursquare Côte d'Ivoire"
                            style={styles.mainImage}
                        />
                    )}
                </div>

                <div style={styles.thumbnailRow}>
                    {images.map((image, index) => (
                        <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            style={{
                                ...styles.thumbnail,
                                opacity: safeActiveIndex === index ? 1 : 0.6,
                            }}
                        >
                            <img src={image} alt="" aria-hidden="true" style={styles.thumbnailImage} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles: Record<string, CSSProperties> = {
    root: {
        backgroundColor: '#F5F0E8',
        color: '#2C2820',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 52px',
    },
    decorativeLabelRow: {
        alignItems: 'center',
        display: 'flex',
        gap: '12px',
    },
    decorativeLine: {
        background: '#8B7355',
        height: '1px',
        width: '40px',
    },
    decorativeLabel: {
        color: '#8B7355',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '10px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Playfair Display", serif',
        fontWeight: 400,
        lineHeight: 1.05,
        marginTop: '16px',
    },
    headingLine: {
        color: '#2C2820',
        fontSize: '64px',
    },
    headingAccent: {
        color: '#B8902E',
        fontSize: '64px',
        fontStyle: 'italic',
    },
    bodyText: {
        color: '#5A5248',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: 1.8,
        marginTop: '24px',
        maxWidth: '420px',
    },
    ctaRow: {
        display: 'flex',
        gap: '16px',
        marginTop: '36px',
    },
    primaryButton: {
        background: '#0D1B2A',
        border: 'none',
        borderRadius: '9999px',
        color: '#FFFFFF',
        cursor: 'pointer',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        padding: '14px 32px',
    },
    secondaryButton: {
        background: 'transparent',
        border: '1.5px solid #0D1B2A',
        borderRadius: '9999px',
        color: '#0D1B2A',
        cursor: 'pointer',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        padding: '14px 32px',
    },
    tagline: {
        color: '#8B7355',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        letterSpacing: '0.05em',
        marginTop: '32px',
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
    },
    mainImageArea: {
        flex: 1,
        minHeight: 0,
    },
    mainImage: {
        display: 'block',
        height: '100%',
        objectFit: 'cover',
        width: '100%',
    },
    thumbnailRow: {
        background: '#2C2820',
        display: 'flex',
        gap: '3px',
        height: '110px',
    },
    thumbnail: {
        border: 'none',
        cursor: 'pointer',
        flex: 1,
        overflow: 'hidden',
        padding: 0,
        transition: 'opacity 0.2s',
    },
    thumbnailImage: {
        height: '100%',
        objectFit: 'cover',
        width: '100%',
    },
};
