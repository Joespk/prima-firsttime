import { RequestHandler } from "express";
import { empty, ICourseHandler, ID } from ".";
import { ICourseDTO, IUpdateCourseDTO } from "../dto/course.dto";
import { Course } from "@prisma/client";
import { ICourseRepository } from "../repository";

export default class Coursehandler implements ICourseHandler {
  constructor(private repo: ICourseRepository) {}

  public getAll: RequestHandler<empty, ICourseDTO[]> = async (req, res) => {
    const result = await this.repo.getAll();

    return res.status(200).json(result);
  };
  public updateById: RequestHandler<ID, Course, IUpdateCourseDTO> = async (
    req,
    res
  ) => {
    const { description, duration, start_time } = req.body;

    const result = await this.repo.partialUpdate(req.params.id, {
      description,
      duration,
      start_time,
    });

    return res.status(201).json(result);
  };
  public deleteByID: RequestHandler<ID, Course> = async (req, res) => {
    const result = await this.repo.delete(req.params.id);
    return res.status(204).json(result);
  };
}
