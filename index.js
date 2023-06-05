let myLeads =[];
const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ulel")
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEL.value);

    inputEL.value = "";
    renderleads();

 
})
function renderleads() {
  
let listItems = ""
for(let i = 0; i < myLeads.length; i++) {
   listItems +=`<li> <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`

    
}
ulEL.innerHTML = listItems
}


