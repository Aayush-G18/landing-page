const p=document.createElement("p");
p.textContent="ME TOO!";
const body=document.body;
const h1=document.createElement("h1");
h1.textContent="I'm in a div";
const div=document.createElement("div");
div.classList.add("container");
div.style.border="solid black";
div.textContent="hi";
div.style.backgroundColor="pink";
div.style.color="white";
div.appendChild(h1);
div.appendChild(p)
body.append(div);
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
