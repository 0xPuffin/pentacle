const formatString = (str) =>
  str.split(" ").join("-").replace("+", "").toLocaleLowerCase();
export default formatString;
