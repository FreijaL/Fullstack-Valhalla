import style from './MenuStaffButton.module.scss';
import { motion } from 'framer-motion';

function MenuStaffButton({title, link, i}) {

    return(
        <motion.button 
            className={style.menuStaffButton}
            onClick={() => window.location.href=link}

            initial={{ opacity: 0, translateX: -100}}
            animate={{ opacity: 1, translateX: 0, transition: 
                        { style: 'spring', stiffness: 120, delay: i * 0.15 }}}
            whileHover={{ scale: 1.02, cursor: 'pointer' }}
            whileTap={{ scale: 0.9 }}
        >
            {title}
        </motion.button>
    )
};

export default MenuStaffButton;