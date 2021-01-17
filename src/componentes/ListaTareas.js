import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({tareas, cambiarTareas }) => {


  const toggleCompletada= (id) => {
    // console.log('estamos editando la tarea con id', id)
    cambiarTareas(tareas.map( (tarea) => {
      if(tarea.id === id){
        return {...tarea, completada: !tarea.completada} 
      }
      return tarea
    }))
  }
  const editarTarea= (id, nuevaTexto) => {
    // console.log('estamos editando la tarea con id', id)
    cambiarTareas(tareas.map( (tarea) => {
      if(tarea.id === id){
        return {...tarea, texto: nuevaTexto} 
      }
      return tarea
    }))
  }
  const borrarTarea =(id) =>{
    cambiarTareas(tareas.filter((tarea) =>{
      if(tarea.id !== id){
        return tarea;
      }
      return;
    }))
  }
  


  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ?   tareas.map( (tarea )=>{
        return <Tarea 
        key={tarea.id}
        tarea={tarea}
        toggleCompletada={toggleCompletada}
        editarTarea={editarTarea}
        borrarTarea={borrarTarea}
         />
      })
      : <div className="lista-tareas__mensaje">No hay tareas Agreagadas</div>
    }
    </ul>
  )
}

export default ListaTareas
