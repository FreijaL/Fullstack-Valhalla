import style from './ButtonSmall.module.scss';
import { motion } from 'framer-motion';

function ButtonSmall({ title }) {

    return(
        <motion.button 
            className={style.buttonSmall}
            whileHover={{ color: 'black', cursor: 'pointer' }}
            whileTap={{ scale: 0.95}}
        >{title}</motion.button>
    )
};

export default ButtonSmall;