let assoviu;
let ponto;
let raquetada;

function preload(){
  assoviu = loadSound("assoviu.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
}

let xRaquet = 5;
let yRaquet = 150;
let compriRaquet = 10;
let alturaRaquet = 90;

let colidiu = false;

let xRopn = 585;
let yRopn = 150;
let velYopn;

let xBolin = 100;
let yBolin = 200;
let diame = 20;
let raio = diame / 2;

let velxBolin = 5;
let velyBolin = 5;

let pontosM = 0;
let pontosOpn = 0;

function setup() {
  createCanvas(600, 400);
assoviu.loop()
}

function draw() {
  background(0);
  fill("white");
  mostraBola();
  movaBola();
  colisaoBorda();
  movaRaquete();
  mostraRaquete(xRopn, yRopn);
  movaRopn();
  coliBi(xRopn, yRopn);
  coliBi(xRaquet, yRaquet);
  placar();
  pontos();
  presa()
  mostraRaquete(xRaquet, yRaquet);
}

function mostraBola() {
  circle(xBolin, yBolin, diame);
}

function movaBola() {
  xBolin += velxBolin;
  yBolin += velyBolin;
}

function colisaoBorda() {
  if (xBolin + raio > width || xBolin - raio < 0) {
    velxBolin *= -1;
  }
  if (yBolin + raio > height || yBolin - raio < 0) {
    velyBolin *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, compriRaquet, alturaRaquet);
}

function movaRaquete() {
  if (keyIsDown(87)) {
    yRaquet -= 10;
  }
  if (keyIsDown(83)) {
    yRaquet -= -10;
  }
}

function movaRopn() {
    if(keyIsDown(UP_ARROW)) {
    yRaquet -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquet += 10;
  }
}

function coliBi(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    compriRaquet,
    alturaRaquet,
    xBolin,
    yBolin,
    raio
  );
  if (colidiu) {
    velxBolin *= -1;
  raquetada.play()
  }
}

function placar() {
  stroke(255);
  fill(color(0, 0, 255));
  rect(450, 10, 40, 20);
  rect(150, 10, 40, 20);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(pontosM, 170, 26);
  text(pontosOpn, 470, 26);
}

function pontos() {
  if (xBolin > 590) {
    pontosM += 1;
  ponto.play()
  }
  if (xBolin < 10) {
    pontosOpn += 1;
  ponto.play()
  }
}

function presa(){
    if (xBolin - raio < 0){
    xBolin = 23
    }
}
