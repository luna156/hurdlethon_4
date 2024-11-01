function helloWorld(_name){
    alert(`Hello, ${_name}!`);
}

helloWorld("GDG on Campus Sogang");

const helloBtn = document.getElementById("helloBtn");
const userName = document.getElementById("helloName");

helloBtn.addEventListener("click", () => {

    helloWorld(userName.value);
})