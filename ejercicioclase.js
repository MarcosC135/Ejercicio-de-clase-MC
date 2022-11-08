var array;
function arraymulti(){
     array = [
        {username: "Marco", cod:"192059", doc:"123456", tipouser:"estudiante"},
        {username: "Estivens", cod:"192059", doc:"123456", tipouser:"estudiante"},
        {username: "Castellanos", cod:"192059", doc:"123456", tipouser:"estudiante"}
    ]
    let fecha = new Date();
    var horas = fecha.getHours();
    console.log(horas);
}

function compara(){
    var nombre = $("#nombre").val();
    console.log(array)
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre si existe");
        }
        else{
            console.log("El nombre NO existe");
        }
    }
}