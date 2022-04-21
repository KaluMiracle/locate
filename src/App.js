import React, { useEffect, useState } from 'react';
import { Draggable, Map,  } from "pigeon-maps"
import { Autocomplete, TextField } from '@mui/material';
import countries from './countries.json'

import logo from './logo.svg'
import './App.css'

function App() {
   const [anchor, setAnchor] = useState([
     parseFloat(countries[0].latitude), parseFloat(countries[0].longitude)
    ]);

   useEffect(()=>{
     console.log(anchor)
   })
  return(
    <div className='app'>
      
      <Map  width={'100%'} height={'50vh'} center={anchor} defaultZoom={3}>
        <Draggable   anchor={anchor} onDragEnd={setAnchor}>
          <div className='marker'>
            <img src={logo} alt="" />
            <p>lat: {parseFloat(anchor[0]).toPrecision(4)}</p>
            <p>lng: {parseFloat(anchor[1]).toPrecision(4)}</p>
          </div>
          
        </Draggable>
      </Map>

      <form className='container'>
        

      <h4>Enter latitude and logitude to show on the Map</h4>

      <input className='input' placeholder={`latitude: ${anchor[0]}`} type={'number'} onChange={(e)=> setAnchor([parseFloat(e.target.value), anchor[1]])}/>
      <input className='input' placeholder={`longitude: ${anchor[1]}`} type={'number'} onChange={(e)=> setAnchor([anchor[0], parseFloat(e.target.value)])}/>

      <h4>Or Enter Country to show on the Map</h4>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries}
        sx={{ width: 300, }}
        getOptionLabel={(option) => `${option.name}  ${option.emoji}`}
        defaultValue={countries[0]}
        renderInput={(params) => <TextField 
            {...params}  
            label="Countries" 
            

           
          />}
        onChange={(params, newValue)=>setAnchor(newValue.latitude ? [parseFloat(newValue.latitude).toPrecision(4), parseFloat(newValue.longitude).toPrecision(4)] : [0,0] )}
      />

      </form>

    </div>
  )
   
}

export default App;