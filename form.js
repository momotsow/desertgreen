//Contact Form in PHP
const form = document.getElementById("FarmForm");
const trader = document.getElementById("TraderForm");
const contact = document.getElementById("contact-form");

statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "farmermodal.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}

trader.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    trader.classList.add("disabled");
  
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "tradermodal.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
          statusTxt.style.color = "red";
        }else{
            trader.reset();
          setTimeout(()=>{
            statusTxt.style.display = "none";
          }, 3000);
        }
        statusTxt.innerText = response;
        trader.classList.remove("disabled");
      }
    }
    let formData = new FormData(trader);
    xhr.send(formData);
  }

contact.onsubmit = (e)=>{
e.preventDefault();
statusTxt.style.color = "#0D6EFD";
statusTxt.style.display = "block";
statusTxt.innerText = "Sending your message...";
contact.classList.add("disabled");

let xhr = new XMLHttpRequest();
xhr.open("POST", "contactform.php", true);
xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
    let response = xhr.response;
    if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
    }else{
        contact.reset();
        setTimeout(()=>{
        statusTxt.style.display = "none";
        }, 3000);
    }
    statusTxt.innerText = response;
    contact.classList.remove("disabled");
    }
}
let formData = new FormData(contact);
xhr.send(formData);
}