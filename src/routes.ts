
import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateTagService } from "./services/CreateTagService";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAlthenticated } from "./middlewares/ensureAlthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.get("/tags",ensureAlthenticated, listTagsController.handle )
router.post("/tags", ensureAlthenticated, ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAlthenticated, createComplimentController.handle)

router.get("/users/compliments/send",ensureAlthenticated, listUserSendComplimentsController.handle )
router.get("/users/compliments/receive",ensureAlthenticated, listUserReceiveComplimentsController.handle )
router.get("/users", ensureAlthenticated, listUsersController.handle)


export { router }

