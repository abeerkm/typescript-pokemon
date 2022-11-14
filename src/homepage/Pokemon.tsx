import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function PokemonList(props:{id:number , image:string, name:string, type:string,pokemonDetails:object }){
   // const navigate=useNavigate()
   
    
    return(
        <Link className='pokecontainer' 
            to= "/Details"
            state={{details:props.pokemonDetails}}
          >
            <div className="number"><small>#0{props.id}</small></div>
            <img src={props.image} alt={props.name} />
            <div className="detail-wrapper">
                <h3>{props.name}</h3>
                <small>Type: {props.type}</small>
            </div>
            
        </Link>
    
    )
}
        
   
