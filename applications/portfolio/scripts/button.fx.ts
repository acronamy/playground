const tinyColor = require("tinyColor2");

export interface AvailableEffects{
    mouseTracker(targetClass:string);
}

const baseClassName = ".button"
export function buttonFx(components){
    const buttonConfig = components.buttons;

    document.querySelectorAll(baseClassName).forEach(element=>{
        element.innerHTML = 
`<!--Using button effects--><span class='button-text'>${element.textContent}</span>
<canvas class="button-paint-layer hide"></canvas>`
    })

    const availableEffects:AvailableEffects = {
        mouseTracker(targetClass){
            let target = document.querySelectorAll(targetClass)
            if(target.length>=0){
                target.forEach(element=>{
                    element.addEventListener("mousedown",function(e:MouseEvent){
                        element.classList.add("mousedown");
                    })
                    element.addEventListener("mouseup",function(e:MouseEvent){
                        element.classList.remove("mousedown");
                        element.classList.add("mouseup");
                        setTimeout(function(){
                            element.classList.remove("mouseup");
                        },100)
                    })
                })
            }
        }
    }

    Object.keys(buttonConfig).forEach(spec =>{
        spec = buttonConfig[spec];
        let specClassName = spec["class-name"]; 
        let effects = spec["effects"];
        effects.forEach(effect => {
            if(availableEffects.hasOwnProperty(effect)){
                availableEffects[effect](`${baseClassName}${specClassName}`);
            }
        });
    })
}

