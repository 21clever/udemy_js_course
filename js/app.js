"use strict";
let out = document.querySelector('.out');

for(let i = 1; i < 10; i++) {
    out.innerHTML += `3*${i}=${3 * i}<br>`;
}
