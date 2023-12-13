import style from './ButtonSmallGreen.module.scss';
import { motion } from 'framer-motion';

function ButtonSmallGreen({ title, onClick }) {

    return(
        <motion.button 
            className={style.buttonSmall}
            whileHover={{ color: 'black', cursor: 'pointer' }}
            whileTap={{ scale: 0.95}}
            onClick={onClick}
        >{title}</motion.button>
    )
};

export default ButtonSmallGreen;