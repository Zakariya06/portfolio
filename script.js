// ... ... .. .. about.. .. .. .. .. .. 

let tablinks = document.getElementsByClassName("tab-links");
let tabconts = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (let tabcont of tabconts) {
        tabcont.classList.remove("active-tab");
        if (tabcont.id === tabname) {
            tabcont.classList.add("active-tab");
        }
    }
    event.currentTarget.classList.add("active-links");
}

opentab()






// .........Work sheet msg ......

const scriptURL = 'https://script.google.com/macros/s/AKfycbzkGQbJ5hRD7zMK-2lhO86kiCVnre2ox9tw-0WYd8rG8M3Bm7v-ok2t-TBjeStneo7F1A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message send succesfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});

// ......Munu bar ...

let sidemenu = document.getElementById("side-menu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

