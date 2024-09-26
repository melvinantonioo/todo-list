import React from 'react'

class TodoList extends React.Component {

    deleteBtnHandler() {
        alert("Anda Klik Delete")
    }

    btnHandler(type) {
        alert(`anda pencet tombol ${type}`)
    }

    // componentWillUnmount() {
    //     alert("Component UNMOUNT")
    // }

    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-between todo-item-container align-items-center">
                    {this.props.todoData.activity} ID : {this.props.todoData.id}
                </div>
                <button
                    className="btn btn-danger"
                    onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}
                >Delete</button>
                <button
                    disabled={this.props.todoData.isFinished}
                    onClick={() => this.props.completeTodoHandler(this.props.todoData.id)}
                    className="btn btn-success">
                    {
                        this.props.todoData.isFinished ? <strong>Finished</strong> : <em>Complete</em>
                    }
                </button>
            </div>
        )
    }
}

export default TodoList