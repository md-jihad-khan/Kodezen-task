import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="kzui-navbar">
      <div className="kzui-navbar__logo">Logo</div>

      <ul className="kzui-navbar__menu">
        <li className="kzui-navbar__item-active">Welcome</li>
        <li className="kzui-navbar__item">Blocks</li>
        <li className="kzui-navbar__item">Setting</li>
      </ul>
    </nav>
  );
};

export default Navbar;
