//html for liverealod
let filters = require("@templates/svg/filters.svg");
require("@templates/head.html");
require("@templates/body.html");

let svgAssets = document.createElement("div")
svgAssets.innerHTML = [
    filters,
].join("");
svgAssets.style.display = "none";
svgAssets.setAttribute("id","svg-assets");
document.body.appendChild(svgAssets);

//styles

require("@styles/index.scss");

//components
require("@styles/components/button.scss");

const components = require("@config/style.ts").default.componentsJs



//isomorphic
require("@scripts/button.fx.ts").buttonFx(components)
