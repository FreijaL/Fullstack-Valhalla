//MiniButton.jsx

import style from './MiniButton.module.scss';

function MiniButton({title, onClick}) {

    return(
        <button className={style.miniButton} onClick={onClick}>{title}</button>
    )
};

export default MiniButton;