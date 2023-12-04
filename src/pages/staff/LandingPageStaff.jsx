import style from './LandingPageStaff.module.scss';
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';


function LandingPageStaff() {

    return(
        <>
            <Header />
            <main className={style.landingPageMainContainer}>
                <h2>Välkommen till jobbet!</h2>
                <section className={style.mainLinkContainer}>
                    <Link className={style.mainLinkItem} to='/kitchen' >Köket</Link>
                    <Link className={style.mainLinkItem} to='/service' >Kassan</Link>
                    <Link className={style.mainLinkItem} to='/history' >Orderhistorik</Link>
                    <Link className={style.mainLinkItem} to='/guide' >Snabbguide</Link>
                </section>
            </main>
        </>
    )
};

export default LandingPageStaff;