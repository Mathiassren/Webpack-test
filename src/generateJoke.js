import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
}

export default generateJoke;

//Error
const fetchHttpStat = () => {
  axios
    .get("httpstat.us/103")
    .then((response) => {
      console.log(response.data);
    })

    .catch((error) => {
      console.log(error.description);
      const errorMessage = error.response.data.description;
      console.log(errorMessage);
      document.getElementById("error-handling").textContent =
        "Der er er sket en fejl prøv igen senere!";
    });
};

fetchHttpStat();
