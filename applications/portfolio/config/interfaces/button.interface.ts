import {SizeVarients, Sizes} from "./size.interface";
import {Roundness} from "./roundness.interface";
import {AvailableStates} from "../interfaces/states.interface";
import {ShadowTypes} from "./shadow.interface";
import {AvailableEffects} from "../../scripts/button.fx";

export interface ButtonSpec{
    "empty-text":string;
    "background":string;
    "text-color":string;
    "text-weight":100|200|300|400|500|600|700|800|900|"bold"|"normal"|"lighter"|"bolder"|"inherit"|"initial";
    "text-transform":"capitalize"|"uppercase"|"lowercase"|"none";
    "border":boolean;
    "outline":boolean;
    "shadow":boolean;
    "use-shadow":keyof ShadowTypes;
    "default-size":Sizes;
    "class-name":string;
    "roundness":Roundness;
    "hollow-varient":boolean;
    "size-varient":SizeVarients;
    "states":AvailableStates<ButtonSpec>;
    "effects":Array<keyof AvailableEffects>;
}

export interface buttonTypes{
    "basic":ButtonSpec,
    "primary":ButtonSpec,
    "secondary":ButtonSpec,
    "success":ButtonSpec,
    "warning":ButtonSpec,
    "info":ButtonSpec,
    "danger":ButtonSpec,
    "link":ButtonSpec
}