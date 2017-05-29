import {Color} from "./color.interface";
import {BorderTypes} from "./border.interface";
import {Roundness} from "./roundness.interface";

export type Appearance = "light"|"dark";

export interface Skin{
    /**
     * What is the overall theme of this skin?
    */
    appearance:Appearance;
    /**
     * The default border
    */
    border:BorderTypes;
    /**
     * The roundness used by this skin
    */
    roundness:Roundness;
    /**
     * If elements use opacity, how much should be used?
    */
    opacity:number;
    /**
     * What colors are allowed as base colors?
    */
    base:"#191919"|"#f7f7f7";
    /**
     * What colors are allowed as the skin color?
    */
    color:Color
}