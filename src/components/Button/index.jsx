import './styles.scss';

export const Button = ({ text, click, disabled }) => {

    return (
        <button 
            className="button" 
            onClick={click}
            disabled={disabled}
        >
            {text}
        </button>
    )
}