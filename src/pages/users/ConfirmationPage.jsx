import style from './ConfirmationPage.module.scss';
import Header from '../../Components/Header';
import OrderConfirmationCard from '../../Components/OrderConfirmationCard';
import { useSelector } from 'react-redux';

function ConfirmationPage() {

    const orderData = useSelector((state) => state.order);
    console.log("Conf page:", orderData);

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