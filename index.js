const Button = (props) => {
  //  Write your code here.
  const { className , text} = props;

  return <button className={`button ${className}`}>{text}</button>

 
const element = (
  //  Write your code here.
  <div className="bg">
    <h1>Social Button</h1>
    <div className="xx">
      <Button className="x" text="Like" />
      <Button className="y"  text="Share" />
      <Button className="z"  text="Comment" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
