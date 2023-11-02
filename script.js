window.addEventListener("load", function(){
  const form = document.querySelector("#character");
  form.addEventListener("submit", powerInfo);
})

function attributes(){
  document.querySelector("#speedy").setAttribute("class", "hidden");
  document.querySelector("#strenghty").setAttribute("class", "hidden");
  document.querySelector("#invis").setAttribute("class", "hidden");
  document.querySelector("#mindy").setAttribute("class", "hidden");
  document.querySelector("#speed-wand").setAttribute("class", "hidden");
  document.querySelector("#speed-axe").setAttribute("class", "hidden");
  document.querySelector("#strength-hands").setAttribute("class", "hidden");
  document.querySelector("#strength-wand").setAttribute("class", "hidden");
  document.querySelector("#invisible-axe").setAttribute("class", "hidden");
  document.querySelector("#mindy-axe").setAttribute("class", "hidden");
}

function powerInfo(e){
  e.preventDefault();
  attributes();
  let inputName = document.querySelector("#name").value;
  let inputPower = document.querySelector("input[name='power']:checked").value;
  let weapon = document.querySelector("#weapon").value;
  let output = document.querySelector(".output");
  
  
  if(inputPower === "speed" && weapon === "hands" ){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#speedy").removeAttribute("class");
  }else if( inputPower === "speed" && weapon === "wand"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#speed-wand").removeAttribute("class");
  }else if( inputPower === "speed" && weapon === "axe"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#speed-axe").removeAttribute("class");
  }else if( inputPower === "strength" && weapon === "hands"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#strength-hands").removeAttribute("class");
  }else if( inputPower === "strength" && weapon === "wand"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#strength-wand").removeAttribute("class");
  }else if( inputPower === "strength" && weapon === "axe"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#strenghty").removeAttribute("class");
  }else if( inputPower === "invisibility" && weapon === "hands"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#invis").removeAttribute("class");
  }else if( inputPower === "invisibility" && weapon === "axe"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#invisible-axe").removeAttribute("class");
  }else if( inputPower === "mind" && weapon === "hands" || weapon === "wand"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#mindy").removeAttribute("class");
  }else if( inputPower === "mind" && weapon === "axe"){
    output.textContent = `Name: ${inputName}, Power: ${inputPower}, Weapon: ${weapon}`;
    document.querySelector("#mindy-axe").removeAttribute("class");
  }


}
  
