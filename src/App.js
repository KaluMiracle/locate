import React, { useEffect, useRef, useState } from 'react';
import { Draggable, Map, Marker } from "pigeon-maps"
import { Autocomplete, TextField } from '@mui/material';
import cities from './cities.json'
import { InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { OnlinePredictionSharp } from '@mui/icons-material';

function App() {
  const [options, setOptions] = useState( cities);
   const [anchor, setAnchor] = useState([50.879, 4.6997]);


  






   const mapRef = useRef()
   const handleclick = ()=>{
     console.log(mapRef.current)
   }
  

   
  useEffect(()=>{
    console.log(anchor)
  })

   
  return(
    <div>
      <head>
        <meta charset="UTF-8"></meta>
      </head>
      <Map ref={mapRef} height={300} center={anchor} defaultZoom={5}>
        <Draggable  offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img src="./logo.svg" width={100} height={95} alt="Pigeon!" />
        </Draggable>
      </Map>



      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        getOptionLabel={(option) => `${option.name}`}
        
        renderInput={(params) => <TextField 
            {...params}  
            label="Countries" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={`https://openweathermap.org/img/wn/${params.emoji}@2x.png`} alt={params.emoji}/>
                </InputAdornment>
              )
            }}

           
          />}
        onChange={(option, newValue)=>setAnchor(newValue ? [parseFloat(newValue.latitude), parseFloat(newValue.longitude)] : [0,0] )}
      />

    </div>
  )
   
}

export default App;