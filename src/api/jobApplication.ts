import express from "express";
import {
  createJobApplication,
  getJobApplications,
  getJobApplicationById,
} from "../application/jobApplication";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import AuthorizationMiddleware from "./middleware/authorization-middleware";

const jobApplicationRouter = express.Router();

jobApplicationRouter
  .route("/")
  .post(ClerkExpressRequireAuth({}), createJobApplication)
  .get(
    ClerkExpressRequireAuth({}),
    AuthorizationMiddleware,
    getJobApplications
  );

jobApplicationRouter
  .route("/:id")
  .get(
    ClerkExpressRequireAuth({}),
    AuthorizationMiddleware,
    getJobApplicationById
  );
export default jobApplicationRouter;
