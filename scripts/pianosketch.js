/* 
I plan to remove all cooldown based triggers and just do it on collision trigger, one trigger per hover and more on click.
Maybe have option to disable trigger on enter?
also I could set keyboard keys to each section so people could play a tune from their keyboard.
*/

var cooldown1 = 60;
var cooldown2 = 60;
var cooldown3 = 60;
var cooldown4 = 60;
var cooldown5 = 60;
var cooldown6 = 60;
var cooldown7 = 60;
var cooldown8 = 60;

function preload() {
    mySound1 = loadSound('../assets/sounds/348888__cabled-mess__glockenspiel-12-f-3-01.wav');
    mySound2 = loadSound('../assets/sounds/348893__cabled-mess__glockenspiel-21-a3-03.wav');
    mySound3 = loadSound('../assets/sounds/348898__cabled-mess__glockenspiel-27-bb3-04.wav');
    mySound4 = loadSound('../assets/sounds/348907__cabled-mess__glockenspiel-28-b3-01.wav');
    mySound5 = loadSound('../assets/sounds/348911__cabled-mess__glockenspiel-32-c4-01.wav');
    mySound6 = loadSound('../assets/sounds/348917__cabled-mess__glockenspiel-36-d4-01.wav');
    mySound7 = loadSound('../assets/sounds/348920__cabled-mess__glockenspiel-42-e4-03.wav');
    mySound8 = loadSound('../assets/sounds/348924__cabled-mess__glockenspiel-46-f4-04.wav');

}

function setup(){
    const width = windowWidth;
    const height = windowHeight;

    createCanvas(width,height);
    background(255);
}

function draw(){
    if(cooldown1 >= 0){
        cooldown1--;
    }
    if(cooldown2 >= 0){
        cooldown2--;
    }
    if(cooldown3 >= 0){
        cooldown3--;
    }
    if(cooldown4 >= 0){
        cooldown4--;
    }
    if(cooldown5 >= 0){
        cooldown5--;
    }
    if(cooldown6 >= 0){
        cooldown6--;
    }
    if(cooldown7 >= 0){
        cooldown7--;
    }
    if(cooldown8 >= 0){
        cooldown8--;
    }

    background(255);
    noStroke();
    if(mouseX > 0 && mouseX < width / 8){
        fill(214, 200, 121);

        rect(0,0,width / 8,height);
        if(cooldown1 <= 0){
        mySound1.play();
        cooldown1 = 60;
        }
    }
    if(mouseX > width / 8 && mouseX < width / 8 * 2){
        fill(237, 213, 172);

        rect(width / 8,0,width / 8,height);
        if(cooldown2 <= 0){
            mySound2.play();
            cooldown2 = 60;
        }
    }
    if(mouseX > width / 8 * 2 && mouseX < width / 8 * 3){
        fill(220, 237, 165);

        rect(width / 8 * 2,0,width / 8,height);
        if(cooldown3 <= 0){
            mySound3.play();
            cooldown3 = 60;
        }
    }
    if(mouseX > width / 8 * 3 && mouseX < width / 8 * 4){
        fill(224,255,235);

        rect(width / 8 * 3,0,width / 8,height);
        if(cooldown4 <= 0){
            mySound4.play();
            cooldown4 = 60;
        }
    }
    if(mouseX > width / 8 * 4 && mouseX < width / 8 * 5){
        fill(123,179,139);

        rect(width / 8 * 4,0,width / 8,height);
        if(cooldown5 <= 0){
            mySound5.play();
            cooldown5 = 60;
        }
    }
    if(mouseX > width / 8 * 5 && mouseX < width / 8 * 6){
        fill(73,93,112);
        rect(width / 8 * 5,0,width / 8,height);
        if(cooldown6 <= 0){
            mySound6.play();
            cooldown6 = 60;
        }
    }
    if(mouseX > width / 8 * 6 && mouseX < width / 8 * 7){
        fill(204,104,104);
        rect(width / 8 * 6,0,width / 8,height);
        if(cooldown7 <= 0){
            mySound7.play();
            cooldown7 = 60;
        }
    }
    if(mouseX > width / 8 * 7 && mouseX < width / 8 * 8){
        fill(255,199,201);
        rect(width / 8 * 7,0,width / 8,height);
        if(cooldown8 <= 0){
            mySound8.play();
            cooldown8 = 60;
        }
    }
    
}