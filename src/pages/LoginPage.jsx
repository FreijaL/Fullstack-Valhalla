import style from './LoginPage.module.scss';
import LoginField from '../Components/LoginField';
import Header from '../Components/Header';
import ButtonSmall from '../Components/ButtonSmall';
import ButtonSmallGreen from '../Components/ButtonSmallGreen';
import { useNavigate } from 'react-router';



function LoginPage() {

    const navigate = useNavigate();


    return (
        <section className={style.loginPageContainer}>
            <Header />
            <main className={style.loginPageMain}>
                <img className={style.loginPageLogo} src="./svg/pizza-slice.svg" alt="pizza-logo" />
                <section className={style.loginPageInputContainer}>
                    <LoginField label='Användarnamn:' type='text' name='user' id='user' />
                    <LoginField label='Lösenord:' type='password' name='password' id='password' />
                    <p className={style.forgotPassword}>Glömt lösenord?</p>

                    <ButtonSmallGreen title='Logga in' onClick={() => navigate('/staff')} />
                    <ButtonSmall title='Skapa konto' />
                </section>
            </main>
        </section>
    )
};

export default LoginPage;
