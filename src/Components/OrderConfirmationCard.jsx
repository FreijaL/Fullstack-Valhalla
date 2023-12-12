import style from "./OrderConfirmationCard.module.scss";

function OrderConfirmationCard({ orderInfo }) {
  console.log(orderInfo);

  return (
    <section className={style.confirmationCardContainer}>
      <section className={style.confirmationText}>
        <h1>Tack för din beställning</h1>
        <p>Ordernr: #{orderInfo.orderNumber}</p>
      </section>
      <section className={style.confirmationOrder}>
        <section className={style.confirmationOrderProduct}>
          {orderInfo &&
            orderInfo.items.map((orderItem) => (
              <section className={style.confirmationOrderProductDetail} key={orderItem.id}>
                <p>{orderItem.itemName} x {orderItem.quantity}</p>
                <p>{orderItem.price} kr</p>
              </section>
            ))}
        </section>
        <section className={style.confirmationPrice}>
          <p>Totalt:</p>
          <p>{orderInfo.priceTotal} kr</p>
        </section>
      </section>

      <section className={style.confirmationTime}>
        <p className={style.confirmationTimeText}>
          Din pizza beräknas vara klar om:
        </p>
        <h4>25 minuter</h4>
      </section>
    </section>
  );
}

export default OrderConfirmationCard;
