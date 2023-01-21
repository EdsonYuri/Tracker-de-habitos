const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
function add() { 
  const toDay = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(toDay)
  if (dayExists) {
    alert("Dia já incluso❌")
    return
  }
  nlwSetup.addDay(toDay)
  nlwSetup.renderLayout()
  alert("Dia adicionado com sucesso✅")
}
form.addEventListener("change", save)
function save() {
  localStorage.setItem("NLWSetups@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetups@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()