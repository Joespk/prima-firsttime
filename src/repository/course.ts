import { Course, PrismaClient } from "@prisma/client";
import { ICourseRepository, IUpdateCourse } from ".";
import { ICourseDTO, IUpdateCourseDTO } from "../dto/course.dto";

export default class CourseRepository implements ICourseRepository {
  constructor(private prisma: PrismaClient) {}

  public partialUpdate(id: string, course: IUpdateCourse): Promise<Course> {
    return this.prisma.course.update({
      where: { id: id },
      data: course,
    });
  }

  public delete(id: string): Promise<Course> {
    return this.prisma.course.delete({
      where: { id: id },
    });
  }

  // public create = (course: ICreateCourse): Promise<Course> =>
  //   this.prisma.course.create({ data: course });

  public async getAll(): Promise<ICourseDTO[]> {
    return this.prisma.course.findMany({
      include: {
        instructor: true,
      },
    });
  }
}
