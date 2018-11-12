document.getElementById('save').addEventListener('click', function(){
    var name = document.getElementById("name")
    var last_name = document.getElementById("last_name")
    var year_of_birth = document.getElementById("year_of_birth")

    if(name.value.length == 0){
       alert("ingrese Nombre")
       last_name.focus = true
       return false;
    }

    if(last_name.value.length == 0){
        alert("ingrese Apellido")
        last_name.focus = true
        return false;
     }

     if(year_of_birth.value.length == 0){
        alert("ingrese Año de nacimiento")
        year_of_birth.focus = true
        return false;
     }

    document.getElementById("response").innerHTML = response(name.value,last_name.value,year_of_birth.value)     
    document.getElementById("response").style.color = "white"
});

function calculateAge(year)
{
    var current_year = (new Date).getFullYear();
    return current_year - year
}

function response(name, last_name, year_of_birth)
{
    return "Hola " + name + " "+ last_name + " tienes " + calculateAge(year_of_birth) + " años de edad"
}