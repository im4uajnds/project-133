Status = "";
objects=[];
Bottle_image = "";

function preload(){
    Bottle_image = loadImage("Bottle.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Bottle_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    if(Status!=""){
        image(Bottle_image,0,0,640,350);
        for(var i= 0; i<Objects.length; i++){
            document.getElementById("Status").innerHTML="Status: objects detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}