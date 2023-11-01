import { Course, Teacher } from "@prisma/client";
import { ICourseDTO } from "../dto/course.dto";
import { ICreateTeacherDto, ITeacherDto } from "../dto/teacher.dto";

// export interface ICreateCourse {
//   name: string;

//   description: string;

//   start_time: Date;

//   duration: number;
// }

export interface IUpdateCourse {
  description: string;

  start_time: Date;

  duration: number;
}

export interface ICourseRepository {
  // create(course: ICreateCourse): Promise<Course>;

  getAll(): Promise<ICourseDTO[]>;

  partialUpdate(id: string, course: IUpdateCourse): Promise<Course>;

  delete(id: string): Promise<Course>;
}

export interface ITeacherRepository {
  create(teacher: ICreateTeacherDto): Promise<ITeacherDto>;
}
