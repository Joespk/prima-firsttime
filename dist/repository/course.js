"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CourseRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    partialUpdate(id, course) {
        return this.prisma.course.update({
            where: { id: id },
            data: course,
        });
    }
    delete(id) {
        return this.prisma.course.delete({
            where: { id: id },
        });
    }
    // public create = (course: ICreateCourse): Promise<Course> =>
    //   this.prisma.course.create({ data: course });
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.course.findMany({
                include: {
                    instructor: true,
                },
            });
        });
    }
}
exports.default = CourseRepository;
