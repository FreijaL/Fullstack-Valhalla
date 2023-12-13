import style from './ButtonSmallGreen.module.scss';

function ButtonSmallGreen({ title }) {

    return(
        <button className={style.buttonSmall}>{title}</button>
    )
};

export default ButtonSmallGreen;