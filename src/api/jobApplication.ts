import express from "express";
import {
  createJobApplication,
  getJobApplications,
  getJobApplicationById,
} from "../application/jobApplication";
import { clerkMiddleware, requireAuth } from "@clerk/express"; // Updated import
import AuthorizationMiddleware from "./middleware/authorization-middleware";

const jobApplicationRouter = express.Router();

jobApplicationRouter
  .route("/")
  .post(clerkMiddleware, requireAuth, createJobApplication) // Updated auth middleware
  .get(
    clerkMiddleware,
    requireAuth,
    AuthorizationMiddleware,
    getJobApplications
  );

jobApplicationRouter
  .route("/:id")
  .get(
    clerkMiddleware,
    requireAuth,
    AuthorizationMiddleware,
    getJobApplicationById
  );

export default jobApplicationRouter;
