import { CourseData } from "@/types/courseType";

const API_URL = "http://localhost:3001/";

export const fetchCourses = async (): Promise<CourseData[]> => {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};
