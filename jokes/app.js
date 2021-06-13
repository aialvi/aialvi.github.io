let buttonJoke = document.getElementById("btn-joke");

const joke = document.getElementById("joke");

async function generateJoke() {
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
    "<span style='color: #7a1651'>" +
    data.setup +
    "</span> <br /> <br />" +
    "<span style='color: #253e9b'>" +
    data.punchline +
    "</span> <br />";
}

buttonJoke.addEventListener("click", generateJoke);
