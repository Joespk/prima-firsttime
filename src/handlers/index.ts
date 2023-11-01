import { RequestHandler } from "express";
import { ICourseDTO, IUpdateCourseDTO } from "../dto/course.dto";
import { Course } from "@prisma/client";
import { ICreateTeacherDto, ITeacherDto } from "../dto/teacher.dto";

export interface empty {}

export interface ID {
  id: string;
}

export interface ICourseHandler {
  getAll: RequestHandler<empty, ICourseDTO[]>;

  updateById: RequestHandler<ID, Course | string, IUpdateCourseDTO>;

  deleteByID: RequestHandler<ID, Course>;
}

export interface ITeacherHandler {
  register: RequestHandler<empty, ITeacherDto, ICreateTeacherDto>;
}
