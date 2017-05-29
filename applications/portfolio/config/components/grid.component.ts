import {Grid} from "../interfaces/grid.interface";

//Grid config
const fallback = "@media only screen and (min-width : 0)"
export const grid:Grid = {
  //enable disable
  "mobile":true,
  "mobile-landscape":true,
  "tablet":true,
  "tablet-landscape":true,
  "desktop":true,
  "wide-desktop":true,
  //set sizes
  get ["device-mobile"](){
    return this["mobile"]?"only screen and (min-width : 480px)":fallback;
  },
  get ["device-mobile-landscape"](){
    return this["mobile-landscape"]?"only screen and (min-device-width : 480px) and (orientation : landscape)":fallback;
  },
  get ["device-tablet"](){
    return this["tablet"]?"only screen and (min-width : 768px)":fallback;
  },
  get ["device-tablet-landscape"](){
    return this["tablet-landscape"]?"only screen and (min-device-width : 768px) and (orientation : landscape)":fallback;
  },
  get ["device-desktop"](){
    return this["desktop"]?"only screen and (min-width : 992px)":fallback;
  },
  get ["device-wide-desktop"](){
    return this["wide-desktop"]?"only screen and (min-width : 1200px)":fallback;
  }
}