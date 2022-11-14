import React, { useEffect, useState } from 'react'
import './details.css';
import pokemonimage from '../images/imagepok.png'
import { useLocation } from 'react-router-dom'
export default function Details(){
    //const { data } = useParams
    const Location=useLocation()
    const pokemon=Location.state.details
    const [imagepath,useimagepath]=useState("")
    useEffect(() => {
        let url="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
        if (pokemon.id<10){
            useimagepath(url+"00"+pokemon.id+".png")
        }
        else{
            useimagepath(url+"0"+pokemon.id+".png")
        }
        
      }, []);
     
    
    return(
        <div className='pokemonDetails'> 
       <div className='headerimage'><img  src={pokemonimage}/></div>
        <div className='pokemoncard'> 
        <div className='rectangle'> 
        <a id='id' >#0{pokemon.id}</a>
          <div className='line'></div>
            <img id='pokimage' src={imagepath}/>
            <a id='pokname'>{pokemon.name}</a>
            <div className='types'>
          <div className='type1'>
            <a>{pokemon.types[0].type.name}</a></div>
            <div className='type2'>
            <a>{pokemon.types.length>1?pokemon.types[1].type.name:false}</a></div>
            </div>
            </div>
            
          </div>
          </div>
    )

}