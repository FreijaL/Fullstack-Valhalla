import style from './LandingPageStaff.module.scss';
import Header from '../../Components/Header';
import MenuStaffButton from '../../Components/MenuStaffButton';

function LandingPageStaff() {

    return(
        <>
            <Header />
            <main className={style.landingPageMainContainer}>
                <h2>Välkommen till jobbet!</h2>
                <section className={style.mainLinkContainer}>
                    <MenuStaffButton link='/staff/kitchen' title='Köket' i='1'/>
                    <MenuStaffButton link='/staff/service' title='Kassan' i='2'/>
                    <MenuStaffButton link='/staff/history' title='Orderhistorik' i='3'/>
                    <MenuStaffButton link='/staff/guide' title='Snabbguide' i='4'/>
                </section>
            </main>
        </>
    )
};

export default LandingPageStaff;