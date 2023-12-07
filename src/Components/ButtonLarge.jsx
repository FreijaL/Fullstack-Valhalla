import style from './ButtonLarge.module.scss';


function ButtonLarge({title, action, onClick}) {

    return(
        <button className={style.buttonLarge} onClick={onClick} >{title}</button>
    )
};

export default ButtonLarge;