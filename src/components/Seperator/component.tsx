import './styling.css';

function Seperator(props: any) {
  return (
    <p className={`seperator ${props.size.replace('1', 'one').replace('2', 'two').replace('3', 'three').replace('4', 'four').replace('5', 'five').replace('6', 'six').replace('7', 'seven').replace('8', 'eight')}`}>&nbsp;</p>
  );
}

export default Seperator;