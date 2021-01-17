import React, {useState,  useEffect} from 'react';
import './App.css';

import Header from './componentes/Header'
import FormularioTareas from './componentes/FormularioTareas'
import ListaTareas from './componentes/ListaTareas'


const  App =() => {
  // obteniendo   las tareas  guardadas en localstorage  , y se transforma en arreglo
const tareasGuardadas = 
localStorage.getItem('tareas') ? 
JSON.parse(localStorage.getItem('tareas')) : []; 

// establecemos estado de las tareas 
const [tareas, cambiarTareas] = useState(tareasGuardadas)
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas))
}, [tareas])

//acceder  al localstorage  y comprobalr  el valor de mostar completadas  tiene valor null
let configMostrarCompletadas = '';
if(localStorage.getItem('mostrarCompletadas') === null){
  configMostrarCompletadas = true
}else{
  configMostrarCompletadas =localStorage.getItem('mostrarCompletadas') === 'true'
}
// estado de  tareas  completadas 
const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas)
// mantener  el estado    como el valor de  mostrarcompletaada es boleano se transforma atexto con tostring
useEffect(() => {
  localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
 
 
}, [mostrarCompletadas])

console.log(tareas)
  return (
    <div className="contenedor">
     <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
     <FormularioTareas  tareas={tareas} cambiarTareas={cambiarTareas}/>
     <ListaTareas 
     tareas={tareas} 
     cambiarTareas={cambiarTareas}
     mostrarCompletadas={mostrarCompletadas}
     />
    </div>
  );
}

export default App;
