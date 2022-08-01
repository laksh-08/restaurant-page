export function address() {
  const content = document.querySelector("#content");

  content.replaceChildren();

  const add = document.createElement("h2");
  add.textContent = "Address";
  add.classList.add("conta");
  content.appendChild(add);

  const add1 = document.createElement("p");
  add1.textContent = "N0-7 viveganandhar st";
  add1.classList.add("address");
  content.appendChild(add1);

  const add2 = document.createElement("p");
  add2.textContent = "malumichampatti,";
  add2.classList.add("address");
  content.appendChild(add2);

  const add3 = document.createElement("p");
  add3.textContent = "coimbatore.";
  add3.classList.add("address");
  content.appendChild(add3);

  const add4 = document.createElement("p");
  add4.textContent = "Ph-no:9344317442";
  add4.classList.add("address");
  content.appendChild(add4);
}
