import {IResp} from "../types";
import {IUser} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const userService={
    getAll: ():IResp<IUser[]> => apiService.get(urls.users.base),
    getById: (id: number) : IResp<IUser> => apiService.get(urls.users.byId(id))
}

export {
    userService
}