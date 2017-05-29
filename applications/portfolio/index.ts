//html for liverealod
let filters = require("@templates/filters.svg")
require("@templates/head.html");
require("@templates/body.html");

let filterEl = document.createElement("div")
filterEl.innerHTML = filters;
filterEl.style.display = "none";
filterEl.setAttribute("id","filters");
document.body.appendChild(filterEl);

//styles
require("@styles/index.scss");

//Bar
require("@styles/bar.scss");
require("@styles/components/button.scss");

const components = require("@config/style.ts").default.componentsJs



//isomorphic
require("@scripts/button.fx.ts").buttonFx(components)
