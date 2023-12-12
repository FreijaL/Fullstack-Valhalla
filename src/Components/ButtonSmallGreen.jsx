import style from './ButtonSmallGreen.module.scss';

function ButtonSmallGreen({ title, action}) {

    return(
        <button className={style.buttonSmall}>{title}</button>
    )
};

export default ButtonSmallGreen;