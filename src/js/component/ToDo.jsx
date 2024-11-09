import React, { useState } from "react";

export const ToDoList = () => {

    // useState para darle valor a lo que escribamos dentro del input en formato string
    const [toDo, setToDo] = useState('')
    //useState para crear lista con todos los valores que escribamos en el anterior useState
    const [listToDo, setListToDo] = useState([])

    //funcion que se inserte en el cabecero del form
    const handleSubmit = e => {

        //para que el form no recargue la pagina cada vez que damos enter
        e.preventDefault();

        //excluimos a los string vacios de entrar
        if (toDo.trim() === "") return;

        //creamos un objeto a partir del texto que insertemos en el input
        const newToDo = { label: toDo, id: Date.now() }

        //creamos nuevo array pusheando todo lo que escribamos en input y demos enter       
        setListToDo([...listToDo, newToDo])

        //resetamos texto cada vez que damos enter
        setToDo('')
    }

    //damos valor a toDo de lo que escribamos en el imput
    const handleToDo = (e) => setToDo(e.target.value)

    //eliminamos el to do       
    const deleteToDo = (id) => {
        setListToDo(listToDo.filter((el) => el.id !== id))
    }

    return (
        <>
            <div className="container text-center wrapper">
                <h1 className="mb-5 pt-3">The To Do List</h1>
                <form className="input-box" onSubmit={handleSubmit}>
                    <input type={"text"} value={toDo} onChange={handleToDo} placeholder="What needs to be done?"/>
                </form>
                <ul className="notMarkers">
                    {listToDo.length > 0 ? listToDo.map((el) => <li className="pt-3 li-box d-flex justify-content-between" key={el.id}>{el.label} <i className="fa-solid fa-trash" onClick={() => deleteToDo(el.id)}></i></li>) : <li className="pt-3">No hay tareas, añadir tareas</li>
                    }
                </ul>
                <div className="container text-center pt-3">{listToDo.length} items left</div>
            </div>
        </>
    )
}