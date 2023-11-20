import style from './ButtonLarge.module.scss';


function ButtonLarge({title, action}) {

    return(
        <button className={style.buttonLarge}>{title}</button>
    )
};

export default ButtonLarge;