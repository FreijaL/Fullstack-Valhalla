import style from './PaymentPage.module.scss';
import Header from '../../Components/Header';
import DeliveryOption from '../../Components/DeliveryOption';
import LoginField from '../../Components/LoginField';
import ButtonLarge from '../../Components/ButtonLarge';

function PaymentPage() {

    return (
        <section className={style.paymentPageContainer}>
            <Header />
            <main className={style.paymentPageMain}>
                <DeliveryOption />
                <section className={style.paymentPageOptionContainer}>
                    <p>Betalningsalternativ</p>
                    <section className={style.paymentPageOption}>
                        <input type="radio" id='card' />
                        <label htmlFor="card">Kort</label>
                    </section>
                    <section className={style.paymentPageOption}>
                        <input type="radio" id='swish' />
                        <label htmlFor="swish">Swish</label>
                    </section>
                    <section className={style.paymentPageOption}>
                        <input type="radio" id='klarna' />
                        <label htmlFor="klarna">Klarna</label>
                    </section>
                </section>
                <form className={style.paymentPageForm} action="">
                    <p>Leveransuppgifter</p>
                    <LoginField type='text' label='För- och efternamn:' id='name' name='name' />
                    <LoginField type='text' label='Adress:' id='adress' name='adress' />
                    <LoginField type='number' label='Telefon:' id='phone' name='phone' />
                    <LoginField type='number' label='Kortnr:' id='card-number' name='card-number' />
                    <section className={style.paymentPageFormSection}>
                        <LoginField type='date' label='Utgångsdatum:' id='card-date' name='card-date' />
                        <LoginField type='number' label='CVV:' id='card-cvv' name='card-cvv' />
                    </section>
                </form>
                <ButtonLarge title='Betala' />
            </main>
        </section>
    )
};

export default PaymentPage;
