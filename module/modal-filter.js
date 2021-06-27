let card;
let containerModalFilter = document.querySelector(".container-modal-filter");
let bodyFilter = document.querySelector(".body-filter");
let body = document.querySelector("body");
let typesPokemon = [
  "bug",
  "dark",
  "agon",
  "tric",
  "airy",
  "ting",
  "fire",
  "ying",
  "host",
  "rass",
  "ound",
  "Ice",
  "rmal",
  "ison",
  "chic",
  "rock",
  "teel",
  "ater"
]

export function modalFilter() {
  closedModal();
  showModal();
  bodyFilter.innerHTML = card;

  
}

card = `
        <ul id="list-type">
            <li><a href="#" class="type-pokemon" style="color: #99c631" data-dismiss="modal">bug</a></li>
            <li><a href="#" class="type-pokemon" style="color: #4a4858" data-dismiss="modal">dark</a></li>
            <li><a href="#" class="type-pokemon" style="color: #0763ad" data-dismiss="modal">agon</a></li>
            <li><a href="#" class="type-pokemon" style="color: #f5d13e" data-dismiss="modal">tric</a></li>
            <li><a href="#" class="type-pokemon" style="color: #ef8ddf" data-dismiss="modal">airy</a></li>
            <li><a href="#" class="type-pokemon" style="color: #e24653" data-dismiss="modal">ting</a></li>
            <li><a href="#" class="type-pokemon" style="color: #e34653" data-dismiss="modal">fire</a></li>
            <li><a href="#" class="type-pokemon" style="color: #a3d0ef" data-dismiss="modal">ying</a></li>
            <li><a href="#" class="type-pokemon" style="color: #616dbd" data-dismiss="modal">host</a></li>
            <li><a href="#" class="type-pokemon" style="color: #32CD32" data-dismiss="modal">rass</a></li>
            <li><a href="#" class="type-pokemon" style="color: #d47f4a" data-dismiss="modal">ound</a></li>
            <li><a href="#" class="type-pokemon" style="color: #74cfc0" data-dismiss="modal">Ice</a></li>
            <li><a href="#" class="type-pokemon" style="color: #9199a1" data-dismiss="modal">rmal</a></li>
            <li><a href="#" class="type-pokemon" style="color: #a566c6" data-dismiss="modal">ison</a></li>
            <li><a href="#" class="type-pokemon" style="color: #f86e76" data-dismiss="modal">chic</a></li>
            <li><a href="#" class="type-pokemon" style="color: #d2c68f" data-dismiss="modal">rock</a></li>
            <li><a href="#" class="type-pokemon" style="color: #508d9b" data-dismiss="modal">teel</a></li>
            <li><a href="#" class="type-pokemon" style="color: #5798d6" data-dismiss="modal">ater</a></li>
        </ul>
    `;


function closedModal() {
  let closedModal = document.querySelectorAll(".closeModal");

  closedModal.forEach((item) => {
    item.addEventListener("click", function () {
      body.classList.remove("no-scroll");
      containerModalFilter.classList.add("d-none");
    })
  })
}

function showModal() {
  let openModalFilter = document.querySelector(".open-modal-filter");
  openModalFilter.addEventListener("click", function () {
    body.classList.add("no-scroll");
    containerModalFilter.classList.remove("d-none");
  })
}