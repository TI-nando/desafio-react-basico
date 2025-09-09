import './Button.css'
const Button = ({ label }) => {
    const handleClick = () => {
        alert(`O label deste botão é ${label}`);
    };

    return (
        // Corrigido: usando a tag HTML <button>
        <button onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;