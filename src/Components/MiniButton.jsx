import style from './MiniButton.module.scss';

function MiniButton({title}) {

    return(
        <button className={style.miniButton}>{title}</button>
    )
};

export default MiniButton;