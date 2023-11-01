import { PrismaClient } from "@prisma/client";
import express, { Request } from "express";
import { ICourseRepository, ITeacherRepository } from "./repository";
import CourseRepository from "./repository/course";
import { ICourseHandler, ITeacherHandler } from "./handlers";
import Coursehandler from "./handlers/course";
import TeacherRepository from "./repository/teacher";
import TeacherHandler from "./handlers/teacher";

const client = new PrismaClient();
const app = express();

const courseRepo: ICourseRepository = new CourseRepository(client);
const coursehandler: ICourseHandler = new Coursehandler(courseRepo);

const teacherRepo: ITeacherRepository = new TeacherRepository(client);
const teacherHandler: ITeacherHandler = new TeacherHandler(teacherRepo);

app.use(express.json());

console.log(process.env.PORT);

const courseRouter = express.Router();

app.use("/course", courseRouter);

courseRouter.get("/", coursehandler.getAll);

courseRouter.patch("/:id", coursehandler.updateById);

courseRouter.delete("/:id", coursehandler.deleteByID);

const teacherRouter = express.Router();

app.use("/teacher", teacherRouter);

teacherRouter.post("/register", teacherHandler.register);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} `);
});

// app.post(
//   "/course",
//   async (req: Request<{}, Course | string, ICreateCourseDTO>, res) => {
//     console.log(req.body);
//     const { duration, start_time, name, description } = req.body;

//     if (typeof duration !== "number")
//       return res.status(400).send("Duration is not a number");

//     if (duration > DURATION_LIMIT_IN_SECONDS)
//       return res.status(400).send("Duration is more than limited (8 hrs)");

//     if (typeof start_time !== "string")
//       return res.status(400).send("Start_time is not a string");
//     if (isNaN(Date.parse(start_time)))
//       return res.status(400).send("start_time os incorrect date format");

//     if (typeof name !== "string")
//       return res.status(400).send("Name is not a string");
//     if (name.length === 0)
//       return res.status(400).send("name cannot be empty string");

//     if (typeof description !== "string")
//       return res.status(400).send("description is not a string");
//     if (description.length === 0)
//       return res.status(400).send("description cannot be empty string");
//     const result = await courseRepo.create({
//       duration,
//       start_time: new Date(start_time),
//       name,
//       description,
//     });
//     // console.log(result);

//     return res.status(201).json(result);
//   }
// );
