import {ICar} from "../../interfaces/carInteface";
import {FC} from "react";
import {Car} from "./Car";

interface IProps{
    cars: ICar[]
}
const Cars: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};