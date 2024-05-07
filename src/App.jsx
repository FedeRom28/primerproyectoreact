import { Component } from 'react'
import Contador from './componentes/Contador'
import './App.css'
export default class App extends Component{
  render(){
    return(
      <div className='ListaContadores'>
        <contador>ALUMNOS</contador>
        <contador>PROFESORES</contador>
        <contador></contador>
        <contador></contador>

        
      </div>
    )
  }
}
