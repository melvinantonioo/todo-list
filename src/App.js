
import React from 'react';
import './App.css';
import "./custom.css";
import "bootstrap/dist/css/bootstrap.css"
import TodoList from './components/TodoList';
import TodoItemF from './components/TodoItemF';
import Axios from 'axios'

// App()-Parent Componen,  <Todo/> Child COmponent

class App extends React.Component {
  //state yang akan menampung data yang dynamic
  state = {
    namaKu: "Purwadhika",
    user: {
      username: "username",
      email: "username@gmail.com"
    },
    arr: ["Pisang", "Apel", "Leci"],
    todoList: [],

    inputTodo: []
  }

  //Fetching And Update , State Todo List Kita , Jadi Dengan ini kita bisa memanipulasi database yang kita miliki
  fetchTodo = () => {

    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        // alert("Hello")
        console.log(response.data)
        this.setState({ todoList: response.data })
      })
      .catch((err) => {
        alert("Terjadi Kesalahan")
      })

    // alert("Haii")
  }


  //ini Function yang akan Menerima dan Handle Inputan yang diterima dari user
  inputHandler = (event) => {
    // alert(event.target.value)

    this.setState({ inputTodo: event.target.value })
  }

  deletTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id} `)
      .then(() => {
        alert("Berhasil Delete");
        this.fetchTodo();
      })

    // this.setState(
    //   {
    //     todoList: this.state.todoList.filter((val) => {
    //       return val.id !== id
    //     })
    //   }
    // )
  }

  completeTodo = (id) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      isFinished: true
    })
      .then(() => {
        alert("Berhasil Complete Todo")
        this.fetchTodo()
      })
      .catch((err) => {
        alert("Terjadi Kesalahan")
      })
  }

  //Merender Data Yang kita miliki , menampilkan ke layar front-end
  renderActivity() {
    return this.state.todoList.map((val) => {
      return <TodoList
        completeTodoHandler={this.completeTodo}
        deleteTodoHandler={this.deletTodo}
        todoData={val} />
    })
  }


  componentDidMount() {
    this.fetchTodo();
  }

  // componentDidUpdate() {
  //   alert("Component UPDATE")
  // }

  //Function untuk menambahkan data ke database
  addTodo = () => {
    Axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
      isFinished: false
    }).then(() => {
      alert("Berhasil Mendapatkan Todo");
      this.fetchTodo()
    })

    // this.setState({ namaKu: "Coding School" }); //mengubah data lama

    // this.setState({ //menambah data baru 
    //   todoList: [
    //     ...this.state.todoList,
    //     { activity: this.state.inputTodo, id: this.state.todoList.length + 1 }
    //   ]
    // })
  }




  render() {
    // alert("Component RENDER")

    return (
      <div className="App">
        <h1>Todo List</h1>
        <button
          className='btn btn-info'
          onClick={this.fetchTodo}
        >Get My Todolist</button>
        <h1>{this.state.namaKu}</h1>
        {/* <h2>{this.state.inputTodo}</h2> */}
        {this.renderActivity()}

        <div>
          <input
            onChange={this.inputHandler}
            className='mx-3'
            type='text' />
          <button
            onClick={this.addTodo}
            className='btn btn-primary'>Add Todo</button>
        </div>

      </div>
    );
  }

}

export default App;
