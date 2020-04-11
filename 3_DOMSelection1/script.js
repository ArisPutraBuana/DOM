// DOM Selection

// METHOD :

// 1. document.getElementById() -> Mengembalikan Element
const judul = document.getElementById('judul'); // Nama element/variabel dengan id tidak harus sama
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc'; // Merubah warna Background yang memiliki ID judul
judul.innerHTML = 'ARIS PUTRA BUANA'; // Merubah Tulisan Hello Word -> ARIS PUTRA BUANA


// 2. document.getElementsByTagName() -> Mengembalikan HTML Collection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {

    p[i].style.backgroundColor = 'lightblue';

}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// 1. document.getElementByClassName() -> Mengembalikan HTML Collection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini di ubah dari JavaScript';

const p2 = document.getElementsByClassName('p2')[0];
p2.innerHTML = 'Kapan kamu balik ke kampung';








// CODING LATIHAN 1 ========================================================================================

// node.appendChild() -> Menambahkan di akhir Parent tersebut
// const h1Baru = document.createElement('h1');
// h1Baru.style.fontSize = '50%';
// h1Baru.style.backgroundColor = '#ccff00';

// const isiH1Baru = document.createTextNode('ini adalah h1 baru');
// // Simpan tulisan ke dalam paragraf
// h1Baru.appendChild(isiH1Baru); // Masukan atau tambahkan teks ke dalam element p
// // Simpan di tempat yang di inginkan ( di akhir section A )
// const body = document.querySelector('h1');
// body.appendChild(h1Baru); // appendChild = Simpan di akhir Parent




// CODING LATIHAN 2  ========================================================================================
// const divBaru = document.createElement('div');
// const pBaru = document.createElement('p');
// const teksBaru = document.createTextNode('Ini adalah paragraf baru Sayang');

// pBaru.appendChild(teksBaru);
// divBaru.appendChild(pBaru);

// const body = document.querySelector('div');

// body.appendChild(divBaru);