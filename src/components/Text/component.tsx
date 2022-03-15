function Text(props: any) {
  if (props.color === 'red') {
    const styleAttribute = {fontSize: `${props.size}px`, color: '#b53a3a'};
    return (
      <p style={styleAttribute} className={props.className}>
        {props.text}
      </p>
    );
  }
  else {
    const styleAttribute = {fontSize: `${props.size}px`};
    return (
        <p style={styleAttribute} className={props.className}>
        {props.text}
        </p>
    );
  }
}

export default Text;