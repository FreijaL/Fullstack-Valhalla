import style from './LoginField.module.scss';


function LoginField({label, type}) {

    return(
        <form className={style.formContainer}>
            <label className={style.formLabel} htmlFor="user">{label}</label>
            <input className={style.formInput} type={type} name="user" id="user" />
        </form>
    )
};

export default LoginField;