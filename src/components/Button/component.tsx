import './styling.css';

function Button(props: any) {
  if (props.color === 'dark') {
    return (
      <button className="dark-button" onClick={props.onClick}>
      {props.text}
      </button>
    );
  } else if (props.color === 'red') {
    return (
      <button className="red-button" onClick={props.onClick}>
      {props.text}
      </button>
    );
  }
  else {
    return (
        <button onClick={props.onClick}>
        {props.text}
        </button>
    );
  }
}

export default Button;