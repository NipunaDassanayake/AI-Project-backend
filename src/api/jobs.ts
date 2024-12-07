import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJob,
} from "../application/jobs";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const jobsRouter = express.Router();

jobsRouter
  .route("/")
  .get(getAllJobs)
  .post(ClerkExpressRequireAuth({}), createJob); //we use clerk's node software devvelopment kit (SDK)
///to identify if the token that send by front end matches to the data inbackend
jobsRouter
  .route("/:_id")
  .get(ClerkExpressRequireAuth({}), getJobById)
  .delete(deleteJob)
  .put(updateJob);

//Routing
export default jobsRouter;
