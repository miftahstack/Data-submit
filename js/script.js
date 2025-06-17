let nameInput = document.querySelector(".nameInput");
let desInput = document.querySelector(".desInput");
let subbtn = document.querySelector(".subbtn");
let dataOutput = document.querySelector(".dataOutput");

let arr = [];

function showcard() {
  dataOutput.innerHTML = "";
  arr.map((item) => {
    console.log(item);

    dataOutput.innerHTML += `
    <div class="card w-96 bg-base-100 border border-base-300 shadow-xl mt-10">
        <div class="card-body">
            <h2 class="card-title">${item.name}</h2>
            <p>${item.description}</p>
        </div>
    </div>`;
  });
}

subbtn.addEventListener("click", () => {
  showcard();
  arr.push({
    name: nameInput.value,
    description: desInput.value,
  });
});
