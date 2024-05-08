import { Component } from 'react'
import './App.css'
import Contador from './componentes/Contador'

export default class App extends Component
{
  render (){
    return (
      <div className='ListaContadores'>
        <Contador>Alumnos </Contador>
        <Contador> profesor </Contador>
        <Contador> Materias</Contador>
        <Contador> Porofesores</Contador>
      </div>
    )
  }
}