const form=document.getElementById("form")
let message=document.getElementById("message")
const inputs=document.querySelectorAll("input")
const tbody=document.getElementById("tbody")
const precedent = document.getElementById("precedent");
const next = document.getElementById("next");
let pageAceuil=document.getElementById("pageAceuil")



let tableDemandes=[]





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
    AjouterTable()


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

