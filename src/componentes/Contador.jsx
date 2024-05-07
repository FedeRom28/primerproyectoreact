import { Component } from 'react'
import Boton from './Boton';

export default class Contador extends Component{
  render(){
    return(
      <div className='Contador'>
        <span className='Valor'>{this.state.valor}0</span>
        <div className='Botonera'>
            <Boton simbolo='-'
            accion={()=> alert("Resta")}
            />
            <Boton simbolo='+'
            accion={()=> alert("Suma")}
            />

        </div>
    </div>
    )
  }
}