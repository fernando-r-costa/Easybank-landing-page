let hamburguer = document.querySelector(".hamburguer");
let closeCursor = document.getElementById("close-cursor")

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

hamburguer.addEventListener ("click", function(){openModal()});
closeCursor.addEventListener ("click", function(){closeModal()});