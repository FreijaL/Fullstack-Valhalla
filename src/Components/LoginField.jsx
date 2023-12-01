import style from './LoginField.module.scss';


function LoginField({label, type, name, id}) {

    return(
        <form className={style.formContainer}>
            <label className={style.formLabel} htmlFor={id}>{label}</label>
            <input className={style.formInput} type={type} name={name} id={id} />
        </form>
    )
};

export default LoginField;