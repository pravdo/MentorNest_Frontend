import Link from "next/link";

import Footer from "@/components/Footer";
import InfiniteScrollImages from "@/components/InfiniteScrollingAnimation";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to MentorNest</h1>
      <Link href="/courses">View Courses</Link>
      <InfiniteScrollImages />
      <Footer />
    </div>
  );
};

export default Home;
