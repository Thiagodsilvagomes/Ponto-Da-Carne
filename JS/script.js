const especialidades = document.querySelector(".especialidades h2");
const exoticas = document.querySelector(".exoticas h2");

const especialidadesImg = document.querySelectorAll(".especialidades img")
const exoticasImg = document.querySelectorAll(".exoticas img")

const info = document.querySelectorAll(".grid-info")
const info2 = document.querySelectorAll(".grid-info2")


function ativar(){
  especialidades.classList.toggle("active")
  especialidadesImg.forEach((img)=>{
    img.classList.toggle("active")
  })

  info.forEach((itens)=>{
    itens.classList.toggle("active")
  })
  
}

especialidades.addEventListener("click", ativar);


function ativar2(){
  exoticas.classList.toggle("active")
  exoticasImg.forEach((img)=>{
    img.classList.toggle("active")
  })

  info2.forEach((itens)=>{
    itens.classList.toggle("active")
  })
}

exoticas.addEventListener("click", ativar2);


// RADIO-BUTTONS

const exotica = document.querySelector(".exotica")
const especial = document.querySelector(".especiais")
const ambas = document.querySelector(".ambas")


exotica.addEventListener("click", ()=>{
  if(exotica.classList.contains("marcado")){
    exotica.classList.remove("marcado")
  }else{
    exotica.classList.add("marcado")
    especial.classList.remove("marcado")
    ambas.classList.remove("marcado")

  }
})

especial.addEventListener("click", ()=>{
  if(especial.classList.contains("marcado")){
    especial.classList.remove("marcado")
  }else{
    especial.classList.add("marcado")
    exotica.classList.remove("marcado")
    ambas.classList.remove("marcado")
  }
})

ambas.addEventListener("click", ()=>{
  if(ambas.classList.contains("marcado")){
    ambas.classList.remove("marcado")
  }else{
    ambas.classList.add("marcado")
    exotica.classList.remove("marcado")
    especial.classList.remove("marcado")
  }
})


// OPTIONS

const select = document.querySelectorAll(".options p");
const seta = document.querySelector(".options .seta");


seta.addEventListener("click", ()=>{
  select.forEach((carnes)=>{
    carnes.classList.add("active")
    
    carnes.addEventListener("click", ()=>{
      seta.innerText = carnes.innerText;
      for(let itens of select){
        if(!itens.classList.contains("active")){
          itens.classList.add("active");
        }
      }
    })

  })
})

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("seta")) {
    select.forEach((carnes) => {
      carnes.classList.remove("active");
    });
  }
});


// CHECKBOX

const todos = document.querySelector(".todos");
const sms = document.querySelector(".sms");
const email = document.querySelector(".email");


todos.addEventListener("click",()=>{
  todos.classList.toggle("marcado")

    if(todos.classList.contains("marcado")){
      sms.classList.add("marcado");
      email.classList.add("marcado");
    }else{
      sms.classList.remove("marcado");
      email.classList.remove("marcado");
    }

})

sms.addEventListener("click",()=>{
  sms.classList.toggle("marcado")

    if(sms.classList.contains("marcado")){
      todos.classList.remove("marcado");
      email.classList.remove("marcado");
    }else{
      todos.classList.remove("marcado");
      email.classList.remove("marcado");
    }

})

email.addEventListener("click",()=>{
  email.classList.toggle("marcado")

    if(email.classList.contains("marcado")){
      todos.classList.remove("marcado");
      sms.classList.remove("marcado");
    }else{
      todos.classList.remove("marcado");
      sms.classList.remove("marcado");
    }

})


// VALIDAÇÃO

const formulario = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");

const modalErro = document.querySelector(".modal-container");
const modalSuccess = document.querySelector(".modal-container-success")
const btnEnviar = document.querySelector(".enviar");

function nameValidate() {
  const nomeValue = formulario[0].value.trim();
  const nomeValidation = nomeValue.split(" ");

  if (nomeValue === "" || nomeValidation.length < 2) {
    formulario[0].style.border = "2px solid crimson";
    spans[0].style.display = "block";
  } else {
    formulario[0].style.border = "1px solid black";
    spans[0].style.display = "none";
  }
}

formulario[0].addEventListener("input", nameValidate);

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailValidate() {
  const emailValue = formulario[1].value;

  if (!regexEmail.test(emailValue)) {
    formulario[1].style.border = "2px solid crimson";
    spans[1].style.display = "block";
  } else {
    formulario[1].style.border = "1px solid black";
    spans[1].style.display = "none";
  }
}

formulario[1].addEventListener("input", emailValidate);

const regexTelefone = /^\d{11}$/;

function telefoneValidate() {
  const telefoneInput = formulario[2];
  const telefoneValue = telefoneInput.value;
  const telefoneFormatado = telefoneValue.replace(/[\(\)\-\s]/g, "");

  telefoneInput.value = telefoneFormatado; 

  if (!regexTelefone.test(telefoneFormatado)) {
    telefoneInput.style.border = "2px solid crimson";
    spans[2].style.display = "block";
  } else {
    telefoneInput.style.border = "1px solid black";
    spans[2].style.display = "none";
  }
}

formulario[2].addEventListener("input", telefoneValidate);



const radioButton = document.querySelectorAll(".radio-button");

radioButton.forEach((elementos) => {
  elementos.addEventListener("click", () => {
    if (!elementos.classList.contains("marcado")) {
      spans[3].style.display = "block";
    } else {
      spans[3].style.display = "none";
    }
  });
});

const options = document.querySelectorAll(".options p");

options.forEach((opcao) => {
  opcao.addEventListener("click", (event) => {
    const selectValueText = event.target.innerText;
    if (selectValueText === "Selecione uma opção") {
      spans[4].style.display = "block";
    } else {
      spans[4].style.display = "none";
    }
  });
});

const inputCheckBox = document.querySelectorAll(".input-checkbox");

inputCheckBox.forEach((meios) => {
  meios.addEventListener("click", () => {
    if (!meios.classList.contains("marcado")) {
      spans[5].style.display = "block";
    } else {
      spans[5].style.display = "none";
    }
  });
});

function mensagemValidate() {
  const mensagemValue = formulario[3].value;

  if (mensagemValue.length < 5) {
    formulario[3].style.border = "2px solid crimson";
    spans[6].style.display = "block";
  } else {
    formulario[3].style.border = "1px solid black";
    spans[6].style.display = "none";
  }
}

formulario[3].addEventListener("input", mensagemValidate);

const fechar = document.querySelectorAll(".fechar");


fechar.forEach(fechaModal => {
  fechaModal.addEventListener("click", ()=>{
  modalErro.style.display = "none";
  modalSuccess.style.display = "none";
})
})

fechar[1].addEventListener("click", ()=>{
  location.reload();
})


function erroModal() {
  const hasError = Array.from(spans).some((span) => span.style.display === "block");

  if (hasError) {
    modalErro.style.display = "flex";
    modalSuccess.style.display = "none";
  } else {
    const isFormEmpty = Array.from(formulario).some((input) => input.value.trim() === "");

    if (isFormEmpty) {
      modalErro.style.display = "flex";
      modalSuccess.style.display = "none";
    } else {
      modalErro.style.display = "none";
      modalSuccess.style.display = "flex";
    }
  }
}


btnEnviar.addEventListener("click", erroModal);
