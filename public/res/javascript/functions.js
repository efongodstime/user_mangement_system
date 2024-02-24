// functions

buttonCreate.addEventListener('click',()=>{
if(sessionStorage.getItem("now-tab")!=='create'){
sessionStorage.setItem("now-tab","create");
// refelect style
buttonCreate.classList.add('now-button');
buttonDelete.classList.remove("now-button");
buttonRead.classList.remove("now-button");
buttonUpdate.classList.remove("now-button");
createTab.classList.remove("hide");

// tabs
createTab.classList.remove("hide");
updateTab.classList.add("hide");
deleteTab.classList.add("hide");
readTab.classList.add("hide");
}
});

buttonRead.addEventListener('click',()=>{
    if(sessionStorage.getItem("now-tab")!=='read'){
    sessionStorage.setItem("now-tab","read");
    // reflect style
    
readTab.classList.remove("hide");
    buttonRead.classList.add('now-button');
buttonCreate.classList.remove('now-button');
buttonDelete.classList.remove("now-button");
buttonUpdate.classList.remove("now-button");

// tabs style
createTab.classList.add("hide");
updateTab.classList.add("hide");
deleteTab.classList.add("hide");
readTab.classList.remove("hide");
    
    }
    });


    buttonUpdate.addEventListener('click',()=>{
        if(sessionStorage.getItem("now-tab")!=='update'){
        sessionStorage.setItem("now-tab","update");
        
updateTab.classList.remove("hide");
        buttonUpdate.classList.add('now-button');
        buttonCreate.classList.remove('now-button');
        buttonDelete.classList.remove("now-button");
        buttonRead.classList.remove("now-button");
        
        
        // tab style

        createTab.classList.add("hide");
        updateTab.classList.remove("hide");
        deleteTab.classList.add("hide");
        readTab.classList.add("hide");
        }
        });


        buttonDelete.addEventListener('click',()=>{
            if(!sessionStorage.getItem("now-tab")!=='delete'){
            sessionStorage.setItem("now-tab","delete");
            // button styles
            buttonDelete.classList.add('now-button');
buttonCreate.classList.remove('now-button');
buttonRead.classList.remove("now-tab");
buttonUpdate.classList.remove("now-button");
            
            // tabs style
            createTab.classList.add("hide");
            updateTab.classList.add("hide");
            deleteTab.classList.remove("hide");
            readTab.classList.add("hide");
            }
            });
    