"use strict"
const buttons=document.querySelectorAll(".button")
const input=document.querySelector(".input")
let str="";
buttons?.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.textContent==="="){
        str=eval(str)
        input.value=str
    }else if(e.target.textContent==="CE"){
        str=""
        input.value=str
    }else if(e.target.textContent==="DEL"){
        str=str.slice(1,str.length)
        input.value=str
    }else if(e.target.textContent==="←"){
        str=str.slice(0,-1)
        input.value=str
    }else{
        str+=e.target.textContent
        input.value=str
    }
  }
  )
 
})
