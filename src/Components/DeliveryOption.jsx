import style from './DeliveryOption.module.scss';


function DeliveryOption() {


    return(
        <section className={style.deliveryOptionContainer}>
            <label htmlFor="delivery">Välj leveranssätt:</label>
            <select name="delivery" id="delivery">
                <option value="" selected disabled></option>
                <option value="pickup">Hämtas</option>
                <option value="eatIn">Äta här</option>
            </select>
        </section>
    )
};

export default DeliveryOption;