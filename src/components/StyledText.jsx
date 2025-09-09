const StyledText = (props) => {
  const { text, color } = props;

  const textStyle = {
    color: color,
    textTransform: "uppercase",
  };

  return <p style={textStyle}>{text}</p>;
};

export default StyledText;
