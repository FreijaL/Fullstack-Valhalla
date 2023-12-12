//DeliveryOption.jsx

import style from './DeliveryOption.module.scss';
import React, { useState } from 'react';


function DeliveryOption({title}) {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <section className={style.deliveryOptionContainer}>
        <label htmlFor="delivery">{title}</label>
            <select name="delivery" id="delivery" value={selectedOption} onChange={handleChange}>
                <option value="pickup" default>Hämtas</option>
                <option value="eatIn">Äta här</option>
            </select>
        </section>
    )
};

export default DeliveryOption;