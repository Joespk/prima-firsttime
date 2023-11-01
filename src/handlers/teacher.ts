import { RequestHandler } from "express";
import { ITeacherRepository } from "../repository";
import { ITeacherHandler, empty } from "../handlers";
import { ICreateTeacherDto, ITeacherDto } from "../dto/teacher.dto";
import { hashPassword } from "../utils/bcrypt";

export default class TeacherHandler implements ITeacherHandler {
  private repo: ITeacherRepository;

  constructor(repo: ITeacherRepository) {
    this.repo = repo;
  }

  public register: RequestHandler<empty, ITeacherDto, ICreateTeacherDto> =
    async (req, res) => {
      const { name, username, password } = req.body;
      const teacherInfoWithoutPassword = await this.repo.create({
        name,
        username,
        password: hashPassword(password),
      });

      res.status(201).json(teacherInfoWithoutPassword).end();
    };
}
