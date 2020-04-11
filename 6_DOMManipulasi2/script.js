// DOM Manipulation
// Manipulasi Node


// METHOD LAMA
// document.createElement() -> Menambahkan element
// document.creatTextNode() -> Menambahakan atau memasukan text
// node.appendChild() -> Menambahkan di akhir Parent tersebut
// node.insertBefore() -> Menambahkan di awal Parent tersebut
// parentNode.removeChild() -> Menghapus 
// parentNode.replaceChild() -> Mengubah


// METHOD BARU
// parentNode.append()
// parentNode.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()





// Buat element baru
// node.appendChild() -> Menambahkan di akhir Parent tersebut
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru); // Masukan atau tambahkan teks ke dalam element p
// Simpan pBaru/paragraf baru di tempat yang di inginkan ( di akhir section A )
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // appendChild = Simpan di akhir Parent




// Buat element baru
// node.insertBefore() -> Menambahkan di awal Parent tersebut
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('List yang baru');
// Simpan tulisan di dalam LI/List
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)'); // Cara ribet
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// parentNode.removeChild() -> Menghapus
// const sectionA = document.getElementById('a'); // sudah ada di baris ke-21
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);




const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul baru = H2');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);


// Memberikan tanda Element baru
pBaru.style.backgroundColor = 'salmon';
liBaru.style.backgroundColor = 'salmon';
h2Baru.style.backgroundColor = 'salmon';