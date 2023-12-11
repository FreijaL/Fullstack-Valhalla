import style from './SplashPage.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function SplashPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/menu")
        }, 2200)
        return () => clearTimeout(timer)
    });

    return (
        <motion.main 
            className={style.splashContainer}
            initial={{ scale: 3}}
            animate={{ scale: 1}}
            transition={{ duration: .4, type: "spring", stiffness: 80 }}
        >
            <h1 className={style.splashH1}>Valhalla Pizza</h1>
            <h2 className={style.splashH2}>Mat när du vill</h2>
            <motion.img 
                className={style.splachSvg} 
                src="../svg/pizza-slice.svg" 
                alt="pizza-slice" 

                initial={{ x: 0}}
                animate={{ rotate: 720}}
                transition={{ duration: 2}}
            />
        </motion.main>
    )
};

export default SplashPage;
