import style from './SplashPage.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function SplashPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/menu")
        }, 2200)
        return () => clearTimeout(timer)
    });

    return (
        <main className={style.splashContainer}>
            <h1 className={style.splashH1}>Valhalla Pizza</h1>
            <h2 className={style.splashH2}>Mat när du vill</h2>
            <img className={style.splachSvg} src="../svg/pizza-slice.svg" alt="pizza-slice" />
        </main>
    )
};

export default SplashPage;
