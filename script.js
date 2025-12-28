const lights = document.querySelectorAll(".light");

function startTraffic() {
    lights.forEach(light => light.style.background = "#444");

    setTimeout(() => lights[0].style.background = "red", 0);
    setTimeout(() => lights[0].style.background = "#444", 2000);

    setTimeout(() => lights[1].style.background = "yellow", 2000);
    setTimeout(() => lights[1].style.background = "#444", 4000);

    setTimeout(() => lights[2].style.background = "green", 4000);
}
