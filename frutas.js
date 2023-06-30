status = "";
img = "";

function setup()
{
    canvas = createCanvas(640, 400);
    canvas.position(350, 180);

    detectorObject = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objeto";
}

function preload()
{
    img = loadImage('Fruta.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
}

function modelLoaded()
{
    console.log("O Modelo foi Carregado!");
    status = true;
    detectorObject.detect(img, gotResult);
}

function gotResult(error, results)
{

}