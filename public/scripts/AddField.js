//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao

.addEventListener('click',cloneField)

//Executar um aco
function cloneField(){
    //Duplicar os campos
const newFieldsContainer=document.querySelector('.schedule-item').cloneNode(true)
//Colocar uma pagina
const fields = newFieldsContainer.querySelectorAll('input')
fields.forEach(function(field){
field.value=""
})
document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
