import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "@/store";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);
  const { role } = useSelector((state: RootState) => state.user);
  const dispatch: Dispatch = useDispatch();

  const handleLogout = () => {
    dispatch.user.logout();
    // Redirect or additional logic
  };

  return (
    <nav>
      Logo MentorNest
      <Link href="/about-us">About us</Link>
      <Link href="/courses">Courses</Link>
      {role === "admin" && <Link href="/statistics">Statistics</Link>}
      {user && user.id ? (
        <>
          <Link href="/profile">Profile</Link>
          <Link href="/logout" onClick={handleLogout}>
            Logout
          </Link>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
