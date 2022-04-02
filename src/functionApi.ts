import axios from "axios";

function changeText() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com/", config).then((res) => {
    document.getElementById("text").innerHTML = res.data.joke;
  });
}

export default changeText;
