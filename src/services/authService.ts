import axios from "axios";

import { UserData, RegisterResponse } from "@/types/authType";
import { CourseData } from "@/types/courseType";
import { EnrollmentData } from "@/types/enrollmentType";

const API_URL = "http://localhost:3001"; // Change to your actual Nest.js backend URL

// Helper function to get the auth token from storage
const getAuthToken = () => localStorage.getItem("token");

// Axios instance with the authorization header
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  async register(userData: UserData): Promise<RegisterResponse> {
    const response = await axios.post<RegisterResponse>(
      `${API_URL}/auth/register`,
      userData
    );
    return response.data;
  },
  async login(userData: UserData) {
    const response = await api.post("/auth/login", userData);
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
  },
  logout() {
    localStorage.removeItem("token");
    // You might want to invalidate the token on the backend as well
  },
  // User CRUD operations
  createUser(userData: UserData) {
    return api.post("/users", userData);
  },
  getUsers() {
    return api.get("/users");
  },
  getUserById(id: string) {
    return api.get(`/users/${id}`);
  },
  updateUser(id: string, userData: UserData) {
    return api.patch(`/users/${id}`, userData);
  },
  deleteUser(id: string) {
    return api.delete(`/users/${id}`);
  },
  // Course CRUD operations
  createCourse(courseData: CourseData) {
    return api.post("/courses", courseData);
  },
  getCourses() {
    return api.get("/courses");
  },
  getCourseById(id: string) {
    return api.get(`/courses/${id}`);
  },
  updateCourse(id: string, courseData: CourseData) {
    return api.patch(`/courses/${id}`, courseData);
  },
  deleteCourse(id: string) {
    return api.delete(`/courses/${id}`);
  },
  // Enrollment CRUD operations
  createEnrollment(enrollmentData: EnrollmentData) {
    return api.post("/enrollments", enrollmentData);
  },
  getEnrollments() {
    return api.get("/enrollments");
  },
  getEnrollmentById(id: string) {
    return api.get(`/enrollments/${id}`);
  },
  updateEnrollment(id: string, enrollmentData: EnrollmentData) {
    return api.patch(`/enrollments/${id}`, enrollmentData);
  },
  deleteEnrollment(id: string) {
    return api.delete(`/enrollments/${id}`);
  },
};
