import React from 'react'

const TodoItemF = (props) => {

    const deleteBtnHandler = () => {
        alert("Anda Pencet Button Delete")
    }

    const btnHandler = (type) => {
        alert(`anda pencet tombol ${type}`)
    }

    return (
        <div>
            <div className="d-flex flex-row justify-between todo-item-container align-items-center">
                {props.todoData.activity} ID: {props.todoData.id}
            </div>
            <button
                onClick={deleteBtnHandler}
                className="btn btn-danger">Delete</button>
            <button
                onClick={() => btnHandler("Complete")}
                className="btn btn-success">Complete</button>
        </div>
    )
}

export default TodoItemF