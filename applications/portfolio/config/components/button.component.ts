import {buttonTypes, ButtonSpec} from "../interfaces/button.interface";
import {SizeVarients, Sizes} from "../interfaces/size.interface";
import {shadows} from "./shadow.component";
import {skin} from "./skin.component";

//global setup
const buttonHollowVarients:boolean = true;
const buttonDefaultSize:Sizes = "medium";
const buttonRoundness = skin.roundness;
const buttonSizeVarients:SizeVarients = {
  "extra-small":{
    "padding-vertical":"2px",
    "padding-horizontal":"2px"
  },
  "small":{
    "padding-vertical":"2px",
    "padding-horizontal":"2px"
  },
  "medium":{
    "padding-vertical":"10px",
    "padding-horizontal":"12px",
    "font-size":"1rem"
  },
  "large":{
    "padding-vertical":"2px",
    "padding-horizontal":"2px"
  },
  "extra-large":{
    "padding-vertical":"2px",
    "padding-horizontal":"2px"
  }
}

const buttonDefaultSpec:ButtonSpec = {
  "empty-text":"okay",
  "text-weight":"bold",
  "background":"200",
  "text-color":"auto",
  "text-transform":"capitalize",
  "border":true,
  "outline":true,
  "shadow":true,
  "use-shadow":"100",
  "default-size":buttonDefaultSize,
  "class-name":".basic",
  "roundness":buttonRoundness,
  "hollow-varient":buttonHollowVarients,
  "size-varient":buttonSizeVarients,
  "effects":[
    "mouseTracker",
  ],
  "states":{
    hover:{
      "background":"default",
      "border":true,
      "use-shadow":"200"
    }
  }
}

export const buttons:buttonTypes = {
  /**
   * The default button on which all buttons are extended from.
  */
  "basic":buttonDefaultSpec,
  /**
   * The danger button is typically shown in very hazardous situations.
  */
  "danger":{
    ...buttonDefaultSpec,
    ["empty-text"]:"delete",
    ["class-name"]:".danger"
  },
  /**
   * The info button is typically shown in very inforative situations.
  */
  "info":{
    ...buttonDefaultSpec,
    ["class-name"]:".info",
    "empty-text":"got it",
  },
  /**
   * The danger button is typically shown when a user needs to know something.
  */
  "warning":{
    ...buttonDefaultSpec,
    "class-name":".warning",
    "empty-text":"okay",
  },
  /**
   * The success button is typically shown when a user has completed an action.
  */
  "success":{
    ...buttonDefaultSpec,
    "class-name":".success",
  },
  /**
   * The primary button is typically shown when a user has to confirm something.
   * This button is usually branded.
  */
  "primary": {
    ...buttonDefaultSpec,
    "class-name":".primary",
  },
  /**
   * The secondary button is typically shown when a user has to confirm something less important.
   * This button is usually branded.
  */
  "secondary":{
    ...buttonDefaultSpec,
    "class-name":".secondary",
  },
  /**
   * The link button is typically shown to apear like a link.
  */
  "link":{
    ...buttonDefaultSpec,
    "class-name":".link",
  }
}
