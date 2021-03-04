window.addEventListener("DOMContentLoaded",() => {
    const order = localStorage.getItem("order")
    if ( order ) {
        const travelOrder = JSON.parse(order) 
        console.log(travelOrder);
        const travel = document.querySelector(".form")
        console.log(travel);
        const title = travel.querySelector("#destination")
        title.value = travelOrder.title
    }
})

function validate(form) {
    const first_name = document.querySelector("#first-name")
    const last_name = document.querySelector("#last-name")
    const email = document.querySelector("#email")
    const query = document.querySelector("#query")
    const check = document.querySelector("#checkbox")

    if(!first_name.value||!last_name.value||!email.value||!query.value){
        alert('Complete los todos los campos');
        return false;
    }

    if(!check.checked ) {
        alert('Acepte términos y condiciones');
        return false;
    }
    else {
        popup();
        return false;
    }
};

// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function popup() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    hrefIndex();
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      hrefIndex();
    }
  }

  function hrefIndex(){
    const url= window.location.href.replace("form.html", "index.html")
    window.location.href = url
  }



  if(history.forward(1))
  location.replace(history.forward(1));