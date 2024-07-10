let inputs = document.querySelectorAll("input");

function formHandle() {
  event.preventDefault();

  let email= inputs[0].value;
  let pass=inputs[1].value
  if (email== ""||pass=="") {
    inputs.forEach((x) => {
      x.style.border = "2px solid red ";
    });
  } else {
    inputs.forEach((x) => {
      x.style.border = "2px solid green";
    });

    let userdata = {
      email,pass
    };
    fetch("http://localhost:5800/users ", {
      method: "POST",
      body: JSON.stringify(userdata),
    })
      .then(() => {
        console.log("data successfully stored");
        window.location.assign("users.html");
        
      })
      .catch(() => {
        console.log("Something wants wrong");
      });
  }
}

