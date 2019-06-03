'use strict';

const e = React.createElement;

class Showcase extends React.Component {
    state = {
        currentShowcase: 'latex'
    }

    get showcaseButtons() {
        const {
            currentShowcase
        } = this.state;
        return <nav className="showcase_nav">
            <button
                className={currentShowcase == 'latex' && 'current'}
                onClick={() => {
                    this.setState({ currentShowcase: 'latex' })
                }}>
                Latexvåben
        </button>
            <button
                className={currentShowcase == 'leather' && 'current'}
                onClick={() => {
                    this.setState({ currentShowcase: 'leather' })
                }}>
                Læderudstyr
        </button>
            <button
                className={currentShowcase == 'wood' && 'current'}
                onClick={() => {
                    this.setState({ currentShowcase: 'wood' })
                }}>
                Træ arbejde
        </button>
            <button
                className={currentShowcase == 'other' && 'current'}
                onClick={() => {
                    this.setState({ currentShowcase: 'other' })
                }}>
                Kulisser og gyffer
        </button>
        </nav>
    }

    get showcaseText() {
        const {
            currentShowcase
        } = this.state;

        switch (currentShowcase) {
            default:
            case 'latex':
                return (
                    <div className="description">
                        <p>
                            Vi fremstiller alle vores latex våben fra bunden. Vi bruger den bedste skum til hver enkelt produkt.
                        </p>
                        <p>
                            Kernen består af glasfiber så vores våben er flexsible og stærke.
                        </p>
                        <p>
                            Mulighederne er mange, vi fremstiller produktet lige som du ønsker.<br />
                            Vi finder frem til den bedste løsning i tæt samarbejde med dig.
                        </p>
                    </div>
                );
            case 'leather':
                return (
                    <div className="description">
                        <p>
                            Vi fremstiller gerne læderudstyr efter dine ønsker.
                        </p>
                        <p>
                            Eksempler:
                        </p>
                        <ul>
                            <li>Rustninger.</li>
                            <li>Skulder panser.</li>
                            <li>Arm/benskinner.</li>
                            <li>Fuldskeder/halvskeder.</li>
                            <li>Bælter/tasker.</li>
                            <li>Med mere.</li>
                        </ul>
                        <p>
                            Kun din fantasi sætter grænser for hvad vi kan fremstille.
                        </p>
                        <p>
                            Vi tilbyder også at reparer brugt læder udstyr eller ombygge det så det passer perfekt til din karakter.
                        </p>
                    </div>
                );
            case 'wood':
                return (
                    <div className="description">
                        <p>
                            Vi kan fremstille forskellige ting i træ.
                        </p>
                        <p>
                            Kom med forslag og vi er klar til at tage udfordringen op.
                        </p>
                        <p>
                            Eksempler:
                        </p>
                        <ul>
                            <li>Våben holder.</li>
                            <li>Skrå 2delt stol.</li>
                        </ul>
                    </div>
                );
            case 'other':
                return (
                    <div className="description">
                        <p>
                            Vi fremstiller gerne special ting:
                        </p>
                        <p>
                            Kom med din ide og lad os tage udfordringen op.
                        </p>
                        <p>
                            Eksempler:
                        </p>
                        <ul>
                            <li>Rune sten.</li>
                        </ul>
                    </div>
                );
        }
    }

    get showcaseGallery() {
        const {
            currentShowcase
        } = this.state;

        switch (currentShowcase) {
            default:
            case 'latex':
                return (
                    <div className="gallery">Latex</div>
                );
            case 'leather':
                return (
                    <div className="gallery">Læder</div>
                );
            case 'wood':
                return (
                    <div className="gallery">træ</div>
                );
            case 'other':
                return (
                    <div className="gallery">Andet</div>
                );
        }
    }

    render() {
        const {
            showcaseButtons,
            showcaseText,
            showcaseGallery
        } = this;

        return (
            <div>
                {showcaseButtons}
                <div className="content">
                    {showcaseText}
                    {showcaseGallery}
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#order_showcase');
ReactDOM.render(e(Showcase), domContainer);