//Components
import {skin} from "./components/skin.component";
import {grid} from "./components/grid.component";
import {typeography} from "./components/typeography.component";
import {viewport} from "./components/viewport.component";
import {buttons} from "./components/button.component";


function flattenObject(ob) {
	var toReturn = {};
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

const components = flattenObject({
  grid,
  skin,
  typeography,
  viewport,
  buttons
});

const componentsJs = {
  grid,
  skin,
  typeography,
  viewport,
  buttons
}

export default {components, componentsJs}