import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "@/store";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: Dispatch = useDispatch();

  const handleLogout = () => {
    dispatch.user.logout();
    // Redirect or additional logic
  };

  return (
    <nav>
      <Link href="/">Logo MentorNest</Link>
      <Link href="/courses">Courses</Link>
      {user && user.id ? (
        <>
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
