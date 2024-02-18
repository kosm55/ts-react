import {IResp} from "../types";
import {IPost} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getAll: (): IResp<IPost[]> => apiService.get(urls.posts.base),
    getPostById: (id: number): IResp<IPost> => apiService.get(urls.posts.byId(id))
}

export {
    postService
}