import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService"


class ListTagsController {

    async handle(request: Request, response: Response) {
        const lisTagService = new ListTagService()

        const tags = await lisTagService.execute()

        return response.json(tags)
    }
}

export { ListTagsController }