import { Component } from "react";

export default class Boton extends Component{
    constructor(props){
        super(props);
        this.state= { valor:0 }
    }
    render(){
        return(
            <span 
            className='Boton'
            onClick={()=> this.props.accion()}
            >
            {this.props.simbolo}
            </span>
        )
    }
}
