import Link from "next/link";
import { Course } from "../types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <Link href={`/course/${course.cid}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
