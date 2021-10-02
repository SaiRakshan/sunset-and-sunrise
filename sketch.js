var backGroundImg

function preload(){
getBackgroundImg()

}

function setup(){
    createCanvas (800,400)
}

function draw(){
    if (backGroundImg)
      backGround(backGroundImg);
}


async function getBackgroundImage (){
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()
    var time = responseJson.datetime
    //"2021-10-02T02:54:56.834673+00:00"
    var hour = time.slice(11,13)
    if(hour >= 06 && hour <= 18){
        backGroundImg = "sunrise.png"
    
    }
    else {
        backGroundImg = "sunset.png"
    }
    backGroundImg = loadImage(sunrise)
    }
    

