obj = "";
status = "";
objects = [];

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    obj=document.getElementById("Mess").value;
}

function modelLoaded(){
    console.log("Model Loaded !!")
    status = true;
}

function gotResults(error,results){
    if(error){
        ocnsole.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(video, 0, 0, 380,380);
    //objectDetector.detect(video, gotResults);
    if(status !=""){
         r = random(255)
         g = random(255)
         b = random(255)
        objectDetector.detect(video, gotResults);
        for(i = 0; i<objects.length; i++){
            if(objects[i].label=="person"){
                document.getElementById("status").innerHTML = "Status : Object Detected";
                sound1.stop();
                if (status != "") {
                    objectDetector.detect(video, gotResult);
                }
                for (i = 0; i < objects.length; i++) {
                    document.getElementById("status").innerHTML = "Status : Objects Detected";
                    document.getElementById("nobj").innerHTML = "Number Of Objects Detected Are :- " + object.length;
            
                    fill("#FF0000");
                    percent = floor(objects[i].confidence * 100);
                    text(objects[i].label + " " + percent + "%", objects[i].x + 15, );
                    noFill();
                    stroke("#FF0000");
                    rect(objects[i].x, objects[i].x, objects[i].width, objects[i].height);
                }
            }
            else{
                document.getElementById("status").innerHTML = "Status : Object not-found";
                sound1.play();
            }
            fill(r,g,b)
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+percent + "%", objects[i].x, objects[i].y)
            noFill()
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
        }
    }


}
