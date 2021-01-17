import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas }) => {


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
      // eslint-disable-next-line array-callback-return
      return;
    }))
  }
  


  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ?   tareas.map( (tarea )=>{
        if(mostrarCompletadas){
        return <Tarea 
        key={tarea.id}
        tarea={tarea}
        toggleCompletada={toggleCompletada}
        editarTarea={editarTarea}
        borrarTarea={borrarTarea}
         />
         //si la tarea no esta completada
        }else if (!tarea.completada){
          return <Tarea 
          key={tarea.id}
          tarea={tarea}
          toggleCompletada={toggleCompletada}
          editarTarea={editarTarea}
          borrarTarea={borrarTarea} />
        }
        // si ya esta completada  no la devolvemos
        // eslint-disable-next-line array-callback-return
        return;
      })
      : <div className="lista-tareas__mensaje">No hay tareas Agreagadas</div>
    }
    </ul>
  )
}

export default ListaTareas
