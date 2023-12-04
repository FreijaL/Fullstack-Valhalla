import style from './OrderConfirmationCard.module.scss';

function OrderConfirmationCard() {

    return(
        <section className={style.confirmationCardContainer}>
            <section className={style.confirmationText}>
                <h1>Tack för din beställning</h1>
                <p>Ordernr: #43874</p>
            </section>
            <section className={style.confirmationOrder}>
                {/* <section className={style.confirmationOrderProduct}>
                    <section className={style.confirmationOrderProductDetail}>
                        <p>Margherita x 1</p>
                        <p>110 kr</p>
                    </section>
                </section> */}
                <section className={style.confirmationOrderProduct}>
                    <section className={style.confirmationOrderProductDetail}>
                        <p>Margherita x 1</p>
                        <p>110 kr</p>
                    </section>
                    <p className={style.productExtra}>+ Extra ost</p>
                </section>
                <section className={style.confirmationPrice}>
                    <p>Totalt:</p>
                    <p>279 kr</p>
                </section>
            </section>


            <section className={style.confirmationTime}>
                <p className={style.confirmationTimeText}>Din pizza beräknas vara klar om:</p>
                <h4>25 minuter</h4>
            </section>
        </section>
    )
};

export default OrderConfirmationCard;