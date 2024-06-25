import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Header() {
  return (
    <nav className=" w-full h-[60px] bg-blue-900 text-zinc-100 p-3 flex justify-between items-center ">
      <Link to="/">
        <h2 className=" select-none font-bold">Vabthor RCE</h2>
      </Link>
      <ul className=" flex gap-2">
        <li>
          <Link to="/compiler">
            <Button variant='secondary'>Compiler</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
