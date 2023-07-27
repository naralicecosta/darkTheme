const chk = document.getElementById("chk")
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
function mostraMsg() {
  alert("Você mudou de tema!💗")
}
window.onload = function () {
  let botaoAlerta = document.getElementById("chk")

  botaoAlerta.onclick = function () {
    mostraMsg()
  }
}
