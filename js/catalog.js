window.addEventListener("DOMContentLoaded", () =>{
    const orderButtons = document.querySelectorAll("a[data-order]");
    console.log(orderButtons);
    orderButtons.forEach((item) => {
        item.addEventListener('click',(event) => {
            const button = event.currentTarget
            const container = button.parentNode
            console.log(button)
            console.log(container)
            const order={
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText
            }
            console.log(order)
            localStorage.setItem("order", JSON.stringify(order))
            const url= window.location.href.replace("catalog.html", "form.html")
            window.location.href = url
            })
    });
});