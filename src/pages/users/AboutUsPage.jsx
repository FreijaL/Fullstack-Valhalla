import style from './AboutUsPage.module.scss';
import Header from '../../Components/Header';

function AboutUsPage() {

    return (
        <>
            <Header />
            <main className={style.aboutPageContainer}>
                <img className={style.aboutPageImage} src="./images/pizza-oven.png" alt="pizza oven" />
                <section className={style.aboutPageAboutSection}>
                    <h2 className={style.aboutPageHeading}>Om Valhalla</h2>
                    <p>Vi är en ny pizzeria med ett online baserat koncept, vårat mål att leverera kvalité direkt hem till din dörr utan krångel.<br/> 
                        Konceptet grundades 2020 under pandemin då vi fick tänka om kring hur vi hanterar mänsklig kontakt och matlagning. Helt 
                        enkelt att maten kommer till er helt kontaktfritt, detta blev en succé som vi på Valhalla är evigt tacksamma för. </p>
                </section>
                <aside className={style.aboutPageContactContainer}>
                    <h2 className={style.aboutPageHeading}>Kontakta oss</h2>
                    <section className={style.aboutPageContactInfo}>
                        <section className={style.aboutPageContactSection}>
                            <h4>Adress:</h4>
                            <p>Valhallagatan 42,<br/> 442 40 Valhalla</p>
                        </section>
                        <section className={style.aboutPageContactSection}>
                            <h4>Telefon:</h4>
                            <p>0709-425675</p>
                        </section>
                        <section className={style.aboutPageContactSection}>
                            <h4>Maila oss på:</h4>
                            <p>Valhallapizza@gmail.com </p>
                        </section>
                        <section className={style.aboutPageContactSection}>
                            <h4>Följ oss:</h4>
                            <section className={style.aboutPageContactSectionLogo}>
                                <img src="./svg/twitter-logo.svg" alt="Twitter logo" />
                                <img src="./svg/facebook-logo.svg" alt="Facebook logo" />
                                <img src="./svg/instagram-logo.svg" alt="Instagram logo" />
                            </section>
                        </section>
                    </section>
                </aside>
            </main>
        </>
    )
};

export default AboutUsPage;
