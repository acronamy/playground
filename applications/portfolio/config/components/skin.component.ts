import {Skin, Appearance} from "../interfaces/skin.interface";
import {BorderSpec} from "../interfaces/border.interface";
import * as tinyColor from "tinyColor2";


//Skin config is considered global
const lightBase = "#f7f7f7";
const darkBase = "#191919";
const appearance:Appearance = "light";
const varience = {
  light:20,
  dark:10
};//%

//Default Border
const borderDefaultSpec:BorderSpec = {
  get color(){
    if(appearance === "light"){
      return tinyColor(lightBase).darken(varience.light).toString();
    }
    else{
      return tinyColor(darkBase).lighten(varience.dark).toString();
    }
  },
  weight:"1px"
}


export const skin:Skin = {
  appearance:appearance,
  opacity:0.9,
  roundness:"2px",
  border:{
    "hairline":borderDefaultSpec,
    "thin":Object.assign({
      weight:"2px"
    },borderDefaultSpec),
    "medium":Object.assign({
      weight:"3px"
    },borderDefaultSpec),
    "large":Object.assign({
      weight:"4px"
    },borderDefaultSpec),
    "extra-large":Object.assign({
      weight:"5px"
    },borderDefaultSpec)
  },
  get base(){
    return appearance === "light"? lightBase:darkBase;
  },
  color:{
    get base(){
      //Light shades
      if(appearance === "light"){
        return {
          "100":lightBase,
          get ["200"](){
            return tinyColor(this["100"]).darken(5).toString();
          },
          get ["300"](){
            return tinyColor(this["100"]).darken(10).toString();
          },
          get ["400"](){
            return tinyColor(this["100"]).darken(15).toString();
          },
          get ["500"](){
            return tinyColor(this["100"]).darken(20).toString();
          },
          get ["600"](){
            return tinyColor(this["100"]).darken(25).toString();
          },
          get ["700"](){
            return tinyColor(this["100"]).darken(30).toString();
          },
          get ["800"](){
            return tinyColor(this["100"]).darken(35).toString();
          },
          get ["900"](){
            return tinyColor(this["100"]).darken(40).toString();
          },
        }
      }
      //Dark shades
      else{
        return {
          "100":darkBase,
          get ["200"](){
            return tinyColor(this["100"]).lighten(5).toString();
          },
          get ["300"](){
            return tinyColor(this["100"]).lighten(10).toString();
          },
          get ["400"](){
            return tinyColor(this["100"]).lighten(15).toString();
          },
          get ["500"](){
            return tinyColor(this["100"]).lighten(20).toString();
          },
          get ["600"](){
            return tinyColor(this["100"]).lighten(25).toString();
          },
          get ["700"](){
            return tinyColor(this["100"]).lighten(30).toString();
          },
          get ["800"](){
            return tinyColor(this["100"]).lighten(35).toString();
          },
          get ["900"](){
            return tinyColor(this["100"]).lighten(40).toString();
          },
        }
      }
    },
    primary:{
      blue:"indigo"
    },
    accent:{
      blue:"indigo"
    }
  }
}