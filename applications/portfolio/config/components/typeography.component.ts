import {Typeography} from "../interfaces/typeography.interface";
import {skin} from "./skin.component";

export const typeography:Typeography = {
  "sans": "'Helvetica Neue', Helvetica, Arial, sans-serif",
  "serif": "Georgia, 'Times New Roman', serif",
  "mono": "'Lucida Console', Monaco, monospace",
  "text-color": skin.appearance === "light"?"#000":"#fff",
  "base-vertical-unit": "6px",
  "base-line-multi": 4,
  "browser-context": 16,
  get ["base-font-size"](){
    //make the em function work
    return this["browser-context"]+"px";
  },
  "ms-ratio": 1.414,
  "paragraph-indent": true,
  "paragraph-justify": true,
  "load-typesetted": true,
  "global-init": false
}