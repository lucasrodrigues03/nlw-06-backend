import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
   sub: string
}

export function ensureAlthenticated( request: Request, response: Response, next: NextFunction) {

   const { user_id } = request

   const authToken = request.headers.authorization

   if(!authToken) {
      return response.status(401).end()
   }
   
   const [, token] = authToken.split(" ")
   
   try {
      
      const { sub } = verify(token, "5231a8392757a6dfe719efe8c8aa36f5") as IPayload
      
      request.user_id = sub
      
      return next()
      

}catch (err) {
   return response.status(401).end()
}


}