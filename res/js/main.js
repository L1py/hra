const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//    index    0  1  2  3  4   5   6   7
/*const array = [5, 6, 2, 8, 55 ,88 ,65 ,74]

const names = ["ondra", "pepa", "radek"]
console.log(names[1]);
names[2 = "radim"]*/



// [] - pole
// {} - objekt
// index          0     1 2     3
/*const array = ["Radek", 4 5, "Radim"];
const teemo = {
    height: 100,
    width: 50,
    hp: 940,
    mana: 255,
};
teemo.mana = 300;
console.log(teemo.hp);*/

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
})



document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
})




const gameLoop = () => {
    console.log(keys);
    //resize canvas
      resizeCanvas();
    //clear canvas
      clearCanvas();
    //update
      update();
    //render
      render();
    //fps
      getFps();


    window.requestAnimationFrame(gameLoop);
     
}


const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
}

const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720)
    

}

const update = () => {
    
}


const render = () => {
    
}

const getFps = () => {
    
}



window.onload = () => {
    window.requestAnimationFrame(gameLoop);

}