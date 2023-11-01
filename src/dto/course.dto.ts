import { Course, Teacher } from "@prisma/client";

export interface ICreateCourseDTO {
  name: string;

  description: string;

  start_time: string;

  duration: number;
}

export interface IUpdateCourseDTO {
  description: string;

  start_time: Date;

  duration: number;
}

export interface ICourseDTO extends Course {
  instructor: Teacher;
}
