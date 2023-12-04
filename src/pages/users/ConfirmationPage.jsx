import style from './ConfirmationPage.module.scss';
import Header from '../../Components/Header';
import OrderConfirmationCard from '../../Components/OrderConfirmationCard';

function ConfirmationPage() {

    return (
        <main className={style.confirmationPageContainer}>
            <Header />
            <section className={style.confirmationPageCardContainer}>
                <OrderConfirmationCard />
            </section>
        </main>
    )
};

export default ConfirmationPage;