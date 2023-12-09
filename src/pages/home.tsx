import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to MentorNest</h1>
      <Link href="/courses">View Courses</Link>
      <Footer />
    </div>
  );
};

export default Home;
