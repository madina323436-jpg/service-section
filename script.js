// Small interaction example
document.querySelectorAll(".card, .small-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.cursor = "pointer";
  });
});
function toggleMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    
 }