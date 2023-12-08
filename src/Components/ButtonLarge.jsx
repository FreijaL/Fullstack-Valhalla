import style from './ButtonLarge.module.scss';
import { motion } from 'framer-motion';

function ButtonLarge({title, link}) {

    return(
        <motion.button 
            className={style.buttonLarge}
            onClick={() => window.location.href=link}
            whileHover={{ cursor: 'pointer'}}
            whileTap={{ scale: 0.9}}
        >{title}
        </motion.button>
    )
};

export default ButtonLarge;