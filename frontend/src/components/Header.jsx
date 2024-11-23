import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

const Header = () => {
  const { user, handleLogout } = useUser();
    
  return (
    <header className="sticky top-0 bg-white text-black p-6 flex justify-between border-2 border-b">
      <Link to={"/"} className="flex gap-x-4 cursor-pointer">
        <svg
          width="37"
          height="28"
          viewBox="0 0 37 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.44763 27.3912C12.9698 27.3912 13.7459 20.7299 17.5169 14.7837C17.3776 16.9095 17.5069 18.7903 17.9248 20.0834C19.5666 25.1871 25.2181 25.5789 27.7852 20.3968C31.4069 13.089 32.4417 11.3649 36.0933 6.10449C38.5012 2.62691 35.7052 0.383628 32.4715 1.99997C30.8099 2.83263 28.1135 4.89958 24.7504 9.29798C25.3375 5.95755 25.1783 0.295464 20.283 0.618732C17.696 0.785264 14.3429 3.66529 9.76595 11.0417C10.144 6.89796 10.2933 3.95917 8.46252 2.42119C7.20884 1.36323 4.25373 0.961592 2.48265 3.22447C0.701627 5.50693 0.283733 9.95431 0.46283 14.6368C0.811076 24.4426 4.33333 27.3912 7.44763 27.3912Z"
            fill="#FF500A"
          />
        </svg>
        <h1 className="text-lg font-semibold cursor-pointer">
          Book Review Platform
        </h1>
      </Link>
      {!user ? (
        <nav>
          <Link to="/sign-in" className="mr-6 font-medium hover:text-[#ff6023]">
            Sign In
          </Link>{" "}
          <Link to="/sign-up" className="mr-6 font-medium hover:text-[#ff6023]">
            Sign Up
          </Link>{" "}
        </nav>
      ) : (
        <nav>
          <Link to="/" className="mr-6 font-medium hover:text-[#ff6023]">
            Home
          </Link>
          <Link to="/books" className="mr-6 font-medium hover:text-[#ff6023]">
            Books
          </Link>
          {user && user.userType === "admin" && (
            <Link
              to="/books/add"
              className="mr-6 font-medium hover:text-[#ff6023]"
            >
              Add Book
            </Link>
          )}
          <Link to="/profile" className="mr-6 font-medium hover:text-[#ff6023]">
            Profile
          </Link>
          <Link
            to="/"
            className="font-medium hover:text-[#ff6023]"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
