let buttonJoke = document.getElementById("btn-joke");
const button1 = document.querySelector("button");
const joke = document.getElementById("joke");

async function generateJoke() {
  button1.disabled = true;

  joke.innerHTML =
    "<span style='color: #7a1651'>" +
    " " +
    "</span> <br />" +
    "<span style='color: #253e9b'>" +
    " " +
    "</span>" +
    '<div class="loader"></div>' +
    "<br />";

  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
    config
  );

  const data = await response.json();

  joke.innerHTML =
    '<div class="fade-in">' +
    "<span style='color: #7a1651'>" +
    data.setup +
    "</span> <br /> <br />" +
    "<span style='color: #253e9b'>" +
    data.punchline +
    "</span> <br /> </div>";

  button1.disabled = false;
}

buttonJoke.addEventListener("click", generateJoke);
