const trigger = document.getElementById("trigger");
const target = document.getElementById("target");
function back() {
    target.src = "img/picA.jpg"
}
function forth() {
    target.src = "img/picB.jpg"
}
trigger.addEventListener("mouseenter", forth);
trigger.addEventListener("mouseleave", back)