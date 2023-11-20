import style from './ButtonMedium.module.scss';


function ButtonMedium({title, action}) {

    return(
        <button className={style.buttonMedium}>{title}</button>
    )
};

export default ButtonMedium;