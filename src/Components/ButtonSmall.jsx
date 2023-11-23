import style from './ButtonSmall.module.scss';

function ButtonSmall({ title, action}) {

    return(
        <button className={style.buttonSmall}>{title}</button>
    )
};

export default ButtonSmall;