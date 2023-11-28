import style from './ConfirmationPage.module.scss';
import Header from '../../Components/Header';
import OrderConfirmationCard from '../../Components/OrderConfirmationCard';

function ConfirmationPage() {

    return (
        <main className={style.confirmationPageContainer}>
            <Header />
            <OrderConfirmationCard />
        </main>
    )
};

export default ConfirmationPage;