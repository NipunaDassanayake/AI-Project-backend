import "dotenv/config";
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./infastructure/db";
import jobApplicationRouter from "./api/jobApplication";
import cors from "cors";
import GlobalErrorHandlingMiddleware from "./api/middleware/global-error-handler";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

//! REST full API

app.use("/jobs", jobsRouter);
app.use("/jobApplications", jobApplicationRouter);
app.use(cors());

app.use(GlobalErrorHandlingMiddleware);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
