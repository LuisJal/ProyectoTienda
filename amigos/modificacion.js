const editarBtns = document.querySelectorAll("#btn-editar");
const formEditar = document.getElementById("form-edicion");
const eldiv = document.getElementById("form-editar");

const cancelarBtn = document.getElementById("cancelar");
const guardarBtn = document.getElementById("guardar");
function abrirFormulario() {
  const fila = this.closest("tr");
  const id = fila.dataset.id;
  console.log(id);
  const descripcion = fila.cells[1].textContent;
  const precio = fila.cells[2].textContent;

  document.querySelector("#id-editar").value = id;
  document.querySelector("#descripcion").value = descripcion;
  document.querySelector("#precio").value = precio;
  formEditar.setAttribute("action", `modificacion/${id}`);

  eldiv.style.display = "block";
}

editarBtns.forEach((btn) => {
  btn.addEventListener("click", abrirFormulario);
});

cancelarBtn.addEventListener("click", () => {
  eldiv.style.display = "none";
});
