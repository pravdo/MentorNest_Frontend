import React from "react";
import CourseCard from "../components/CourseCard";

// Mock data
const courses = [
  { cid: "1", name: "Course 1", description: "Description for Course 1" },
];

const Courses: React.FC = () => {
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <CourseCard key={course.cid} course={course} />
      ))}
    </div>
  );
};

export default Courses;
