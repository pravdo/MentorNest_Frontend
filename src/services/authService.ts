import axios from "axios";

import { UserData, RegisterResponse, LoginResponse } from "@/types/authType";
import { CourseData } from "@/types/courseType";
import { EnrollmentData } from "@/types/enrollmentType";

const API_URL = "http://localhost:3001";

// Helper function to get the auth accessToken from storage
const getAuthToken = () => localStorage.getItem("accessToken");

// Axios instance with the authorization header
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = getAuthToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
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
  async login(userData: UserData): Promise<LoginResponse> {
    try {
      const response = await api.post("/auth/login", userData);
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout() {
    localStorage.removeItem("accessToken");
    // You might want to invalidate the accessToken on the backend as well
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
