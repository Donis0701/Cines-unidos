export default class ICL_cinesUnidos{
    leerpelisG(){
        return prompt("Ingrese monto recaudado en la primera peli");
    }
    leerpelisG2(){
        return prompt("Ingrese monto recaudado de la segunda peli");
    }

    leerpelisG3(){
        return prompt("Ingrese el monto recaudado de la tercera peli");
    }

    leerpelisG4(){
        return prompt("Ingrese el monto del recaudo de la cuarta peli");
    }

    reporteTotalRecaudado(totalRecaudado){
        return`
        <br>Total recaudado: $ ${totalRecaudado}`
    }
}