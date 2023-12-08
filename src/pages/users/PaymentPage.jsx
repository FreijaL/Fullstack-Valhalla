import style from './PaymentPage.module.scss';
import Header from '../../Components/Header';
import DeliveryOption from '../../Components/DeliveryOption';
import LoginField from '../../Components/LoginField';
import ButtonLarge from '../../Components/ButtonLarge';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomerNameToOrder, addCustomerPhoneToOrder, addOrderNumber } from '../../app/orderSlice';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
    const dispatch = useDispatch();
    const orderData = useSelector((state) => state.order);
    const cartItems = useSelector((state) => state.products.cartItems);

    const handleCustomerNameInput = (event) => {
        dispatch(addCustomerNameToOrder(event.target.value));
    }

    const handleCustomerPhoneInput = (event) => {
        dispatch(addCustomerPhoneToOrder(event.target.value));
    }

    const navigate = useNavigate();

    const handleOrder = () => {
        let timeStamp = Date.now().toString();
        let orderNumber = timeStamp.slice(-5);

        const order = {
            "orderNumber": orderNumber,
            "items": cartItems,
            "orderComment": orderData.orderComment,
            "customerInfo": {
                "customerName": orderData.customerInfo.customerName,
                "customerPhone": orderData.customerInfo.customerPhone
            },
        };

        console.log(order);

        dispatch(addOrderNumber(order.orderNumber));

        fetch('https://1x78ct0zxk.execute-api.eu-north-1.amazonaws.com/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));

        navigate("/confirmation");
    }

    return (
        <section className={style.paymentPageContainer}>
            <Header />
            <main className={style.paymentPageMain}>
                <DeliveryOption title='Välj leveranssätt:' />
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
                    <LoginField type='text' label='För- och efternamn:' id='name' name='name' onInput={handleCustomerNameInput} />
                    <LoginField type='text' label='Adress:' id='adress' name='adress' />
                    <LoginField type='number' label='Telefon:' id='phone' name='phone' onInput={handleCustomerPhoneInput} />
                    <LoginField type='number' label='Kortnr:' id='card-number' name='card-number' />
                    <section className={style.paymentPageFormSection}>
                        <LoginField type='date' label='Utgångsdatum:' id='card-date' name='card-date' />
                        <LoginField type='number' label='CVV:' id='card-cvv' name='card-cvv' />
                    </section>
                </form>
                <ButtonLarge title='Betala' onClick={() => handleOrder()} />
            </main>
        </section>
    )
};

export default PaymentPage;
