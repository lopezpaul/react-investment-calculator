import classes from './Button.module.css';

const Button = (props) => {
    let style = classes.button;
    if (props.styleClass !== 'button') {
        style = classes.buttonAlt;
    }
    const defaultHandler = (e) => {
        e.preventDefault();
    }
    const handler = props.onClick ?? defaultHandler;
    return (
        <button type={props.type} className={style} onClick={handler}>
            {props.children}
        </button>
    );
};

export default Button;