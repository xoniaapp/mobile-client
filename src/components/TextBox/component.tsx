import './styling.css';

function TextBox(props: any) {
    return (
        <input type={props.type} className="textbox" placeholder={props.placeholder} />
    );
}

export default TextBox;