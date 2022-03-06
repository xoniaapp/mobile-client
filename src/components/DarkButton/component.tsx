import './styling.css';

function DarkButton(props: any) {
  return (
    <button className="dark-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default DarkButton;