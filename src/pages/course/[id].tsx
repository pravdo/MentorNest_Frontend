import { useRouter } from "next/router";

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch course details based on id

  return (
    <div>
      <h1>Course Details for {id}</h1>
      {/* Course details go here */}
    </div>
  );
};

export default Course;
