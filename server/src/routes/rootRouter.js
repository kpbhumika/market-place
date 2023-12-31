import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import userListingRouter from "./api/v1/userListingRouter.js";
import categoryRouter from "./api/v1/categoryRouter.js";
import listingsRouter from "./api/v1/listingsRouter.js";
import openaiRouter from "./api/v1/openaiRouter.js";
import messageRouter from "./api/v1/messageRouter.js";
import chatRouter from "./api/v1/chatRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/userListings", userListingRouter)
rootRouter.use("/api/v1/categories", categoryRouter)
rootRouter.use("/api/v1/listings", listingsRouter)
rootRouter.use("/api/v1/openAI", openaiRouter)
rootRouter.use("/api/v1/chats", chatRouter)
rootRouter.use("/api/v1/messages", messageRouter)

export default rootRouter;
