"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const course_1 = __importDefault(require("./repository/course"));
const course_2 = __importDefault(require("./handlers/course"));
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
const courseRepo = new course_1.default(client);
const coursehandler = new course_2.default(courseRepo);
app.use(express_1.default.json());
console.log(process.env.PORT);
const courseRouter = express_1.default.Router();
app.use("/course", courseRouter);
courseRouter.get("/", coursehandler.getAll);
courseRouter.patch("/:id", coursehandler.updateById);
courseRouter.delete("/:id", coursehandler.deleteByID);
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
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} `);
});
