import {ICar} from "../../interfaces/carInteface";
import {FC} from "react";

interface IProps{
    car:ICar
}
const Car : FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <button>update</button>
            <button>delete</button>
        </div>
    );
};

export {Car};