let myLeads = `[]`;
myLeads = JSON.parse(myLeads);
localStorage.getItem("myLeads");

let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"));



const deleteBtn = document.getElementById("delete-btn");
const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");


const ulEL = document.getElementById("ulel")
if (leadsfromlocalstorage) {
   myLeads = leadsfromlocalstorage;
   render(myLeads);
}

inputBtn.addEventListener("click", function () {
   myLeads.push(inputEL.value);

   inputEL.value = "";
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   render(myLeads);
   console.log(localStorage.getItem("myLeads"));

})


function render(leads) {

   let listItems = ""
   for (let i = 0; i < leads.length; i++) {
      listItems += `<li> <a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`
   }
   ulEL.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick", function () {
   localStorage.clear();
   myLeads = [];
   render(myLeads);
}

)

tabBtn.addEventListener("click", function () {
   chrome.tabs.query({  active: true ,currentWindow: true}, function (tabs) {
      console.log(tabs[0].url);
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);

   });

}


)

