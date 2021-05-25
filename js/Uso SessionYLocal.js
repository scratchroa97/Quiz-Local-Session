

function que_year_naciste() {

    let year = document.getElementById("yearuser").value
    year = parseInt(year)
    sessionStorage.setItem("year_usuario", year)

    let edad = document.getElementById("edaduser").value
    edad = parseInt(edad)
    sessionStorage.setItem("edad_usuario", edad)

    calcular()

}
function calcular() {

    let year = sessionStorage.getItem("year_usuario")
    let edad = sessionStorage.getItem("edad_usuario")

    let resultado = (year - edad)
    if (edad === "" && year === " ") {
        alert("Por favor llene todos los campos")
    } else (edad && year != " ") 
            alert("Usted nacio en el año" + " " + resultado)
        
    }