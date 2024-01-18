import { Link } from "react-router-dom";
import SearchOredr from "../order/SearchOredr";
import Username from "../user/Username";
function Header() {
  return (
    <header
      className="  flex items-center justify-between
     border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6"
    >
      <Link to="/" className="tracking-widest">
        Fact Recat Pizza Co.
      </Link>
      <SearchOredr />
      <Username />
    </header>
  );
}

export default Header;
