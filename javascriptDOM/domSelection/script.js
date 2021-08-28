/* // DOM Selection
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
p1[0].innerHTML = "ini dirubah dari javascript"; */

//document.querySelector()

/* const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// const p = document.querySelector("p");//ini hanya merubah p pertama
// p.innerHTML = "Ini dirubah melalui javascript loh";

//jika ingin merubah semua p makan gunakan querySelectorAll()
// document.querySelectorAll()
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "pink";
} */

//cara satu
/* const p4 = document.querySelectorAll("p");
p4[3].style.backgroundColor = "pink"; */

//cara dua

/* const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = 'pink'; */

//cara tiga
/* const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];//mengambil index pertama pada array yakni nol
p4.style.backgroundColor = 'pink'; */

/* const judul = document.getElementById("judul");
judul.innerHTML = "<em>Ujang Arisandi</em>";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "hello world!"; */

/* const judul = document.querySelector("#judul");
judul.style.color = "lightblue";
judul.style.backgroundColor = "salmon";
 */

/* const judul = document.getElementsByTagName("h1")[0];

judul.setAttribute("name", "sandhika"); */

/* const a = document.querySelector("section#a a");
a.setAttribute("id", "link");//akan ada attribute baru yakni id yang isinya link
 */

const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "lable");//kalo pake ini menimpa kelas lama
p2.classList.add("lable");
p2.classList.remove("lable");
p2.classList.toggle("lable");
document.body.classList.toggle("biru-muda");
