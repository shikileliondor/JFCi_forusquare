import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
    section: {
        backgroundColor: '#ebebeb',
        padding: 'clamp(48px, 8vw, 96px) clamp(20px, 6vw, 72px)',
    },
    container: {
        maxWidth: '1220px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(32px, 5vw, 80px)',
        alignItems: 'center',
    },
    title: {
        margin: 0,
        fontSize: 'clamp(44px, 5vw, 62px)',
        lineHeight: 1.06,
        letterSpacing: '-0.02em',
        fontWeight: 600,
        color: '#06070A',
    },
    description: {
        margin: 'clamp(24px, 3vw, 34px) 0 clamp(44px, 4vw, 52px)',
        maxWidth: '30ch',
        color: '#06070A',
        fontSize: 'clamp(22px, 2.1vw, 38px)',
        lineHeight: 1.35,
    },
    linkList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        maxWidth: '570px',
    },
    linkItem: {
        borderBottom: '2px solid #7f63bf',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        textDecoration: 'none',
        color: '#06070A',
        padding: '18px 0 16px',
        fontSize: 'clamp(24px, 2.2vw, 32px)',
        lineHeight: 1.2,
        fontWeight: 600,
    },
    visualWrap: {
        position: 'relative',
        minHeight: 'clamp(420px, 46vw, 620px)',
    },
    beigeShape: {
        position: 'absolute',
        top: '0%',
        right: '1%',
        width: '70%',
        height: '92%',
        background: '#ded7bf',
        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 24%)',
    },
    greenShape: {
        position: 'absolute',
        top: '15%',
        left: '0',
        width: '52%',
        height: '50%',
        background: '#99c4b0',
        clipPath: 'polygon(25% 0, 100% 0, 56% 78%, 0 78%, 0 21%)',
    },
    imageCard: {
        position: 'absolute',
        top: '16%',
        left: '12%',
        width: '75%',
        height: '72%',
        overflow: 'hidden',
        clipPath: 'polygon(14% 0, 100% 4%, 97% 84%, 55% 99%, 0 88%, 0 22%)',
        boxShadow: '0 18px 50px rgba(5, 7, 12, 0.22)',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    scribble: {
        position: 'absolute',
        right: '7%',
        bottom: '-4%',
        color: '#8671d8',
        width: '36%',
        height: '26%',
        border: '4px solid currentColor',
        borderRadius: '50%',
        transform: 'rotate(-22deg)',
        opacity: 0.8,
    },
};

export default function LeaderSupportSection() {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div>
                    <h2 style={styles.title}>Are you a Foursquare leader? Find what you need!</h2>
                    <p style={styles.description}>
                        Whether you are serving in a local church or in a unique location around the world, the
                        Foursquare One Team is here to help with everything from credentialing to retirement.
                    </p>

                    <ul style={styles.linkList}>
                        <li style={styles.linkItem}>
                            <a href="#" style={styles.link}>
                                <span>Get Leader + Church Support</span>
                                <span aria-hidden="true">&#8594;</span>
                            </a>
                        </li>
                        <li style={styles.linkItem}>
                            <a href="#" style={styles.link}>
                                <span>Connect with Foursquare Ministries</span>
                                <span aria-hidden="true">&#8594;</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div style={styles.visualWrap}>
                    <div style={styles.beigeShape} />
                    <div style={styles.greenShape} />
                    <div style={styles.imageCard}>
                        <img src="/images/convention.jpg" alt="Leaders speaking on stage" style={styles.image} />
                    </div>
                    <div style={styles.scribble} />
                </div>
            </div>
        </section>
    );
}
