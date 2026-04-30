export default function LookbackHero() {
    return (
        <section className="foursquare-hero">
            <div className="foursquare-hero__left">
                <h1>Are you a Foursquare leader? Find what you need!</h1>

                <p>
                    Whether you are serving in a local church or in a unique location around the world, the Foursquare One Team, including your local district office, is here to help with everything from credentialing to retirement.
                </p>

                <div className="foursquare-hero__ctas">
                    <a href="#" className="foursquare-hero__cta foursquare-hero__cta--primary">
                        <span>Get Leader + Church Support</span>
                        <span>→</span>
                    </a>

                    <a href="#" className="foursquare-hero__cta foursquare-hero__cta--secondary">
                        <span>Connect with Foursquare Ministries</span>
                        <span>→</span>
                    </a>
                </div>
            </div>

            <div className="foursquare-hero__right">
                <div className="foursquare-hero__shape foursquare-hero__shape--one" />
                <div className="foursquare-hero__shape foursquare-hero__shape--two" />
                <div className="foursquare-hero__shape foursquare-hero__shape--three" />

                <img
                    src="/images/IMAGE CONVENTION.jpg"
                    alt="Foursquare leaders speaking on stage"
                    className="foursquare-hero__photo"
                />

                <svg width="120" height="80" viewBox="0 0 120 80" className="foursquare-hero__sketch">
                    <ellipse cx="60" cy="40" rx="55" ry="28" fill="none" stroke="#4A3FA5" strokeWidth="2" opacity="0.6" transform="rotate(-10, 60, 40)" />
                    <ellipse cx="65" cy="45" rx="50" ry="22" fill="none" stroke="#4A3FA5" strokeWidth="1.5" opacity="0.4" transform="rotate(5, 65, 45)" />
                </svg>
            </div>

            <style>{`
                .foursquare-hero {
                    width: 100%;
                    min-height: 500px;
                    background: #ffffff;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                }

                .foursquare-hero__left {
                    padding: 40px 40px 40px 80px;
                }

                .foursquare-hero__left h1 {
                    margin: 0;
                    max-width: 480px;
                    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    font-weight: 800;
                    font-size: clamp(32px, 3.5vw, 48px);
                    line-height: 1.15;
                    color: #0a0a0a;
                }

                .foursquare-hero__left p {
                    margin-top: 28px;
                    margin-bottom: 0;
                    max-width: 420px;
                    font-size: 15px;
                    line-height: 1.65;
                    color: #3a3a3a;
                }

                .foursquare-hero__ctas {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .foursquare-hero__cta {
                    width: fit-content;
                    min-width: 280px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    font-weight: 700;
                    font-size: 14px;
                    color: #0a0a0a;
                    text-decoration: none;
                    padding-bottom: 12px;
                    margin-bottom: 8px;
                }

                .foursquare-hero__cta--primary {
                    border-bottom: 2px solid #0a0a0a;
                }

                .foursquare-hero__cta--secondary {
                    border-bottom: 2px solid #2b2b8c;
                }

                .foursquare-hero__right {
                    position: relative;
                    overflow: visible;
                    height: 520px;
                }

                .foursquare-hero__shape--one {
                    position: absolute;
                    top: 0;
                    right: 60px;
                    width: 340px;
                    height: 380px;
                    background: #e8e4d4;
                    clip-path: polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%);
                    z-index: 1;
                }

                .foursquare-hero__shape--two {
                    position: absolute;
                    top: 60px;
                    left: 20px;
                    width: 200px;
                    height: 260px;
                    background: #6ecfc9;
                    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
                    z-index: 2;
                }

                .foursquare-hero__shape--three {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 300px;
                    height: 340px;
                    background: linear-gradient(135deg, #7b3fa0 0%, #4a3fa5 50%, #3d8fd4 100%);
                    clip-path: polygon(10% 0%, 90% 0%, 100% 90%, 60% 100%, 0% 80%);
                    z-index: 3;
                }

                .foursquare-hero__photo {
                    position: absolute;
                    bottom: 0;
                    right: 40px;
                    width: 320px;
                    height: 440px;
                    object-fit: cover;
                    object-position: center top;
                    z-index: 4;
                }

                .foursquare-hero__sketch {
                    position: absolute;
                    bottom: 20px;
                    right: 10px;
                    z-index: 5;
                }

                @media (max-width: 768px) {
                    .foursquare-hero {
                        grid-template-columns: 1fr;
                    }

                    .foursquare-hero__left {
                        padding: 32px;
                    }

                    .foursquare-hero__right {
                        height: 380px;
                    }
                }
            `}</style>
        </section>
    );
}
