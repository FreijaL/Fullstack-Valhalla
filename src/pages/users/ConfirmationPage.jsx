import style from './ConfirmationPage.module.scss';
import Header from '../../Components/Header';
import OrderConfirmationCard from '../../Components/OrderConfirmationCard';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function ConfirmationPage() {
    const [orderInfo, setOrderInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const orderData = useSelector((state) => state.order);
    console.log("Conf page:", orderData.orderNumber);

    useEffect(() => {
        let orderNumber = orderData.orderNumber

        fetch('https://1x78ct0zxk.execute-api.eu-north-1.amazonaws.com/api/orders/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({orderNumber: orderNumber}),
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.response && data.response[0]) {
                setOrderInfo(data.response[0]);
                setIsLoading(false);
                console.log("pepepe", data.response[0]);
            } else {
                console.error('Unexpected format', data);
                setIsLoading(false);
            }
        })
        .catch(error => console.error('Error', error));
    },[]);

    return (
        <main className={style.confirmationPageContainer}>
            <Header />
            <section className={style.confirmationPageCardContainer}>
                { isLoading ? (
                    <p>Loading your order...</p>
                ): <OrderConfirmationCard orderInfo={orderInfo}/>}
            </section>
        </main>
    )
};

export default ConfirmationPage;