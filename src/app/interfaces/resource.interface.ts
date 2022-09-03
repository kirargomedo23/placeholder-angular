import { CommentI } from "./comments.interface";
import { PhotoI } from "./photos.interface";
import { TodosI } from "./todos.interface";
import { UserI } from "./user.interface";


export type ResourceI = UserI | TodosI | PhotoI | CommentI;