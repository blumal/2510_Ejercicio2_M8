//A, B, C,..,G deben de ser chistes
const jokes = ["Todo se programa en main...XD", "La envidia es como la pelota, a tí te pica y a mi me rebota...XD", "A veces me siento mal..., entonces acomodo la silla y me siento bien",
    "Que sí se cocinar?, Pff... sí supieras como me queda el agua hervida...", "Corre tras tus sueños, si no los alcanzas al menos adelgazas"
];

function getJoke() {
    document.getElementById("joke").innerHTML = '"' + jokes[parseInt(Math.random() * jokes.length)] + '"';
}