import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";



interface User{
	id : Number,
	name: string;
    email: string;
	lastname :string
	password: string;
    }

	interface RequestExt extends Request{
		user?: string | JwtPayload
	}
	 export {User, RequestExt}