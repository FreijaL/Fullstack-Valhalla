import style from './ButtonSmallGreen.module.scss';
import { motion } from 'framer-motion';

function ButtonSmallGreen({ title, action}) {

    return(
        <motion.button 
            className={style.buttonSmall}
            whileHover={{ color: 'black', cursor: 'pointer' }}
            whileTap={{ scale: 0.95}}
        >{title}</motion.button>
    )
};

export default ButtonSmallGreen;