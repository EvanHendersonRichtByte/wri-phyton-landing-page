let toggle=!1;const log=console.log;function navControl(){document.body.scrollTop>80||document.documentElement.scrollTop>80?document.querySelector("header").classList="scrolled":document.querySelector("header").classList=""}const handleResponsiveNavbar=e=>{e?(document.querySelector("body").style.overflowY="hidden",document.getElementById("mobile").style.display="flex",document.querySelector("#toggler > button").setAttribute("id","toggled")):(document.querySelector("body").style.overflowY="scroll",document.getElementById("mobile").style.display="none",document.querySelector("#toggler > button").setAttribute("id",""))};window.matchMedia("(min-width: 575.98px)").addEventListener("change",()=>{handleResponsiveNavbar(toggle=!1)}),document.getElementById("toggler").addEventListener("click",()=>{handleResponsiveNavbar(toggle=!toggle)});