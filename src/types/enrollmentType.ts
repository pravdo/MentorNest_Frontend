export interface EnrollmentData {
  enrollmendId: string;
  userId: string;
  courseId: string;
  enrollDate: Date;
  status: "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    role: "ADMIN" | "BASIC";
    createdAt: Date;
    updatedAt: Date;
  };
}
