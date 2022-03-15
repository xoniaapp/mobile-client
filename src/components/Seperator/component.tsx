function Seperator(props: any) {
  const styleAttribute = {fontSize: `${props.size}px`};
  return (
    <p style={styleAttribute}>&nbsp;</p>
  );
}

export default Seperator;