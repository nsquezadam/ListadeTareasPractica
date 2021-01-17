import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faCheckCircle, faEdit, faTimes, faCircle} from '@fortawesome/free-solid-svg-icons'

const Tarea = ({tarea, toggleCompletada}) => {
const [editantoTarea, setEditantoTarea] = useState(false)
const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

const handleSubmit = (e) =>{
  e.preventDefault();
  setEditantoTarea(false)
}

  return (
   <li className="lista-tareas__tarea">
      <FontAwesomeIcon 
      icon={tarea.completada ? faCheckCircle : faCircle} 
      className="lista-tareas__icono lista-tareas__icono-check" 
      onClick={() =>{ toggleCompletada(tarea.id)}}
      />
     <div className="lista-tareas__texto" >
      {editantoTarea ? 
      <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="formulario-editar-tarea__input"
        value={nuevaTarea}
        onChange={(e)=> setNuevaTarea(e.target.value)}
        
        />
        
        <button className="formulario-editar-tarea__btn">Actualizar</button>
      </form>
      :
      tarea.texto
        }
     </div>
     <div className="lista-tareas__contenedor-botones">
       <FontAwesomeIcon  
       icon={faEdit}
       className="lista-tareas__icono lista-tareas__icono-accion" 
       onClick={()=> setEditantoTarea(true)}
       />
       <FontAwesomeIcon  
       icon={faTimes}
       className="lista-tareas__icono lista-tareas__icono-accion" 
       />
     </div>
     </li>
  )
}

export default Tarea
