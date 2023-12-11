import style from './MiniButton.module.scss';
import { motion } from 'framer-motion';

function MiniButton({title, onClick}) {

    return(
        <motion.button 
            className={style.miniButton} 
            onClick={onClick}
            initial={{ scale: 1 }}
            whileHover={{ color: 'black'}}
            whileTap={{ scale: 0.95, boxShadow: '0px 2px 4px 0px rgba(26, 26, 26, 0.5)' }}
        >{title}
        </motion.button>
    )
};

export default MiniButton;