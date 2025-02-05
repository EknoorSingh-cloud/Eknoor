const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
let navbar=document.querySelector('nav');
        window.onscroll=function()
        {
            if(window.scrollY>0){
                navbar.style.background='#eefff9';
            }else{
                navbar.style.background='transparent';
            }
        }
