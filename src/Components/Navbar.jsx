import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { supabase } from "../Supabase/supabase";
const Navbar = () => {
  const handleSignOut = async () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (!confirmed) return; // user canceled

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      console.log("User signed out successfully");
      window.location.href = "/login";
    }
  };

  return (
    <div className="fixed left-0 right-0 z-50 bg-white/30 backdrop-blur-3xl w-full shadow-md flex justify-between mt-1 py-3 items-center border-neutral px-10 border border-l-0 border-r-0">
      <Link to="/">
        <h1 className="font-medium text-3xl">ATELIER</h1>
      </Link>

      <ul className="flex items-center font-mono gap-10">
        <Link to="/women">
          <li className="cursor-default hover:text-gray-600">WOMEN</li>
        </Link>
        <Link to="/men">
          <li className="cursor-default hover:text-gray-600">MEN</li>
        </Link>
        <Link to="/collections">
          <li className="cursor-default hover:text-gray-600">COLLECTIONS</li>
        </Link>
        <Link to="/about">
          <li className="cursor-default hover:text-gray-600">ABOUT</li>
        </Link>
        <li></li>
      </ul>

      <div className="flex items-center gap-4 text-2xl">
        <Link to="">
          <IoIosSearch />
        </Link>
        <Link to="login">
          <FaRegUser />
        </Link>
        <Link to="">
          <MdOutlineShoppingBag />
        </Link>
        <button
          onClick={handleSignOut}
          className="bg-primary hover:bg-orange-600 transition-all duration-500 font-semibold p-2 text-xl rounded-lg text-white border outline-none cursor-pointer"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
