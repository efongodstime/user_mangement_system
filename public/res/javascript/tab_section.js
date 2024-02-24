"use strict";

// check if session storage is been set 

if(!sessionStorage.getItem('now-tab')){
sessionStorage.setItem('now-tab',"create");
}
let buttonCreate=document.querySelector(".createbtn");
let buttonRead=document.querySelector(".readbtn");
 let buttonUpdate=document.querySelector(".updatebtn");
 let buttonDelete=document.querySelector(".deletebtn");
 let createTab=document.querySelector("#create-tab");
 let deleteTab=document.querySelector("#delete-tab");
 let updateTab=document.querySelector("#update-tab");
 let readTab=document.querySelector("#read-tab");
switch(sessionStorage.getItem("now-tab")){
case "create":
createTab.classList.remove("hide");
updateTab.classList.add("hide");
deleteTab.classList.add("hide");
readTab.classList.add("hide");
buttonCreate.classList.add("now-button");

break;
case "read":
    createTab.classList.add("hide");
    updateTab.classList.add("hide");
    deleteTab.classList.add("hide");
    readTab.classList.remove("hide");
buttonRead.classList.add("now-button");
break;
case "update":
    createTab.classList.add("hide");
    updateTab.classList.remove("hide");
    deleteTab.classList.add("hide");
    readTab.classList.add("hide");
    buttonUpdate.classList.add("now-button");
break;
case "delete":
    createTab.classList.add("hide");
    updateTab.classList.add("hide");
    deleteTab.classList.remove("hide");
    readTab.classList.add("hide");
    buttonDelete.classList.add("now-button");
break;
default: 
createTab.classList.remove("hide");
updateTab.classList.add("hide");
deleteTab.classList.add("hide");
readTab.classList.add("hide");
buttonCreate.classList.add("now-button");
}


