import coverImage from "../../assets/cover/loop.png";

function Header(props) {
  return (
    <header className="space-between px-1">
      {/* <h1>G • e • o • r • g • e</h1>
      <h1>S • c • h • u • l • t • z</h1> */}
      <img src={coverImage} alt="background image"></img>
      {props.children}
    </header>
  );
}

export default Header;
