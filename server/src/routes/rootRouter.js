import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import userListingRouter from "./api/v1/userListingRouter.js";
import categoryRouter from "./api/v1/categoryRouter.js";
import listingsRouter from "./api/v1/listingsRouter.js";
import imagesRouter from "./api/v1/imagesRouter.js";
import openaiRouter from "./api/v1/openaiRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/userListings", userListingRouter)
rootRouter.use("/api/v1/categories", categoryRouter)
rootRouter.use("/api/v1/listings", listingsRouter)
rootRouter.use("/api/v1/images", imagesRouter)
rootRouter.use("/api/v1/openAI", openaiRouter)


export default rootRouter;
