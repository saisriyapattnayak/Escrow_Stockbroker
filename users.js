let button = document.querySelector("button");
let para = document.querySelector("p");
let select =document.querySelector("select")

button.addEventListener("click", () => {
  let val = select.value;
  if(val==""){
      select.style.border="2px solid red"
  }else{
  setInterval(() => {
    select.style.border="2px solid green"
    let whole = Math.floor(Math.random() * 1000000);
    let decimal = Math.random().toFixed(2);
    let randomnum = `${whole}${decimal}`;
    para.innerText = `$: ${randomnum}`;
    para.style.color="red"
  }, 1000);
}
});
