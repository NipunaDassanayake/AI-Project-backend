import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJob,
} from "../application/jobs";
import { clerkMiddleware, requireAuth } from "@clerk/express"; // Updated import

const jobsRouter = express.Router();

jobsRouter
  .route("/")
  .get(getAllJobs)
  .post(clerkMiddleware, requireAuth, createJob); // Updated auth middleware

jobsRouter
  .route("/:_id")
  .get(clerkMiddleware, requireAuth, getJobById) // Updated auth middleware
  .delete(clerkMiddleware, requireAuth, deleteJob) // Updated auth middleware
  .put(clerkMiddleware, requireAuth, updateJob); // Updated auth middleware

// Routing
export default jobsRouter;
