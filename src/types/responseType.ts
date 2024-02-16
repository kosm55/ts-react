import {AxiosResponse} from "axios";
import {ICar} from "../interfaces/carInteface";

type IRes<T>=Promise<AxiosResponse<T>>

export type{
    IRes
}