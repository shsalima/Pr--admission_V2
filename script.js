const form=document.getElementById("form")
let message=document.getElementById("message")
const inputs=document.querySelectorAll("input")
const tbody=document.getElementById("tbody")
const precedent = document.getElementById("precedent");
const next = document.getElementById("next");
let pageAceuil=document.getElementById("pageAceuil")
const InputChercher=document.querySelector("#chercher")
const comptDemande=document.getElementById("comptureDM")
// pour bonus
const darkBtn = document.querySelector(".icon-dark");
const icon = document.getElementById("ri");


let tableDemandes=[]
let cuurPage = 1;
const items = 5;
pageAceuil.innerText=cuurPage
comptDemande.textContent=tableDemandes.length



form.addEventListener("submit",Ajouter=(e)=>{

    e.preventDefault()
    let tableInput=Array.from(inputs)
 const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prn").value;
  const phone = document.getElementById("tl").value;
  const mail = document.getElementById("mail").value;
  const motif = document.getElementById("motif").value;
  const dt = document.getElementById("dt").value;
  const demande={ID:Date.now(),nom,prenom,phone,mail,motif,dt }



  if(nom ==="" || prenom==="" || phone == "" ||mail == "" ||motif == "" || dt == "")
    {
    message.innerHTML='<i id="icons-done" class="ri-emotion-unhappy-line"></i><span>remplir tout les champs !</span>';
    message.style.color="red"
    for (let i = 0; i < tableInput.length; i++) {
       if(tableInput[i].value===""){
        tableInput[i].classList.add("validation")
    }
    else{
        tableInput[i].classList.remove("validation")
       }
    }
    return
  }
  else{
    tableDemandes.push(demande)
    // console.log(tableDemandes)
    AjouterTable(tableDemandes)
    comptDemande.textContent=tableDemandes.length

    message.innerHTML= '<i  id="icons-done" class="ri-emotion-line"></i><span>demande ajouter avec succes !</span>';
    message.style.color="green"
    form.reset()
    for (let i = 0; i < tableInput.length; i++) {
        tableInput[i].classList.remove("validation")
    }
  }
  setTimeout(()=>{
    message.innerHTML=""
  },1000)

})

// function updat data dans le table 
function AjouterTable(arr){
    tbody.innerHTML=""
    let strIndex=(cuurPage-1)* items
    let endIndex=strIndex + items
    let newTableDemanfes= arr.slice(strIndex,endIndex)
    newTableDemanfes.forEach((obj,i)=>{
     const tr=document.createElement("tr")
    tr.innerHTML = `
    <td>${obj.nom}</td>
    <td>${obj.prenom}</td>
    <td>${obj.phone}</td>
    <td>${obj.mail}</td>
    <td>${obj.motif}</td>
    <td>${obj.dt}</td>
    <td>
    <i onclick="supprimer(${i})" class="ri-user-minus-fill"></i>
   
    </td> `;
    tbody.appendChild(tr)
   })

}

function supprimer(i){
    tableDemandes.splice(i,1)
    AjouterTable(tableDemandes)
    comptDemande.textContent=tableDemandes.length

}
// btn de pagination precedent
precedent.addEventListener("click", () => {
  if (cuurPage > 1) {
    cuurPage--;
    pageAceuil.innerText=cuurPage
    AjouterTable(tableDemandes);
    comptDemande.textContent=tableDemandes.length

  }
});
// btn de pagination suivanbnt
next.addEventListener("click", () => {
  if (cuurPage * items < tableDemandes.length) {
    cuurPage++;
    pageAceuil.innerText=cuurPage
    AjouterTable(tableDemandes);
    comptDemande.textContent=tableDemandes.length

  }
});

InputChercher.addEventListener("input",chercher)

function chercher(){
    const valueSearch=InputChercher.value.toLowerCase();
    const tableSerch=[]
    if(valueSearch ===""){
      
        cuurPage=1
        pageAceuil.innerText=cuurPage
        AjouterTable(tableDemandes);
       comptDemande.textContent=tableDemandes.length
       return
    }
    else{
        tableDemandes.map((obj)=>{
            if(obj.nom.toLowerCase().includes(valueSearch) || obj.prenom.toLowerCase().includes(valueSearch) || obj.phone.includes(valueSearch) || obj.mail.toLowerCase().includes(valueSearch)){  
                    tableSerch.push(obj)

                    

            }
        }
    )
        AjouterTable(tableSerch)
               comptDemande.textContent=tableSerch.length
        }
    }



    // pour bounus
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.className = "ri-moon-line";
  } else {
    icon.className = "ri-sun-line";
  }
});

    



