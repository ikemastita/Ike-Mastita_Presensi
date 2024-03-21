let judul;
let nama;
let tombol;
let hello;
function setup() {
  createCanvas(windowWidth, windowHeight);
 judul = createElement('h2', 'Halo semua')
 judul.position(30, 15)
 createCanvas(windowWidth, windowHeight);
 judul = createElement('h2', 'Halo, tuliskan nama anda')
 judul.position(50, 90)
 nama = createInput()
 nama.position(70, 150)
 tombol = createButton('Masukkan')
 tombol.position(80,200)
 tombol.mousePressed(sayHello);
}
function draw() {

}
function sayHello() {
 hello = createElement('h2', 'Selamat datang ' + nama.value())
 hello.position(60, 250)
}