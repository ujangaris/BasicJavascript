// DOM Selection
// document.getElementById()
// javascript tolon carikan saya id => mengembalikan element
const judul = document.getElementById("judul");

//merubah warna tulisan
judul.style.color = "red";
//merubah warna backgroundColor
judul.style.backgroundColor = "#ccc";
//merubah tulisannya
judul.innerHTML = "Ujang Arisandi";

// document.getElementByTagName()
//=> mengembalikan HTMLCollection
const p = document.getElementsByTagName("p");
//merubah warna background
// p[2].style.backgroundColor = "lightblue";
//merubah warna background menggunakan looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "orange";
}
//merubah font size tulisan
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementByClassName()
//=> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = 'ini dirubah dari javascript'
