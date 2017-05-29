import {Partial} from "./partial.interface";

export interface AvailableStates<T>{
    hover?:Partial<T>;
    focus?:Partial<T>;
    active?:Partial<T>;
    visited?:Partial<T>;
}