/**Cines unidos necesita que se realice un programa que muestre el total recaudado 
 * en las 4 películas proyectadas, sabiendo el valor promedio pagado por los espectadores
 * en cada película.
 */
import ICL_cinesUnidos from "./ICL_cinesUnidos.js"
import CL_cinesUnidos from "./CL_cinesUnidos.js"

let ICinesU = new ICL_cinesUnidos(),

pG = ICinesU.leerpelisG(),
pG2 = ICinesU.leerpelisG2(),
pG3 = ICinesU.leerpelisG3(),
pG4 = ICinesU.leerpelisG4(),

CinesU = new CL_cinesUnidos(pG, pG2, pG3, pG4),
salida = document.getElementById("salida");
salida.innerHTML = ICinesU.reporteTotalRecaudado(CinesU.totalRecaudado());

