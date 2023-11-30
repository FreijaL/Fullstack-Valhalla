import style from './LoginPage.module.scss';
import LoginField from '../Components/LoginField';
import Header from '../Components/Header';
import ButtonSmall from '../Components/ButtonSmall';
import ButtonSmallGreen from '../Components/ButtonSmallGreen';


function LoginPage() {



    return (
        <section className={style.loginPageContainer}>
            <Header />
            <main className={style.loginPageMain}>
                <img className={style.loginPageLogo} src="./svg/pizza-slice.svg" alt="pizza-logo" />
                <LoginField label='Användarnamn:' type='text'/>
                <LoginField label='Lösenord:' type='password'/>
                <p className={style.forgotPassword}>Glömt lösenord?</p>

                <ButtonSmallGreen title='Logga in' />
                <ButtonSmall title='Skapa konto' />
            </main>
        </section>
    )
};

export default LoginPage;
