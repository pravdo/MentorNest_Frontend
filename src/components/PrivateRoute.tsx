import { Course } from "@/types";

const API_URL = "http://localhost:3001";

export const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};
