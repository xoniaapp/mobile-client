import './styling.css';

function RedButton(props: any) {
  return (
    <button className="red-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default RedButton;