const baseEndpoint = "https://api.github.com"; // Se define la base de la API
const usersEndpoint = `${baseEndpoint}/users`; // Se define a los usaurios en la api
const $n = document.getElementsByClassName("name"); // Se selecciona el elemento name
const $b = document.querySelector("#blog"); // Se selecicona el ID blog
const $l = document.querySelector(".location"); // Se selecciona el elemento con la clase location

async function displayUser(username) {
  const response = await fetch(`${usersEndpoint}/${username}`); // Se hace solicitud a la API y se espera respuesta
  const data = await response.json(); // Se transforma la respuesta del api a json
  $n.textContent = "cargando...";

  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  // Se maneja erores con la api
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
