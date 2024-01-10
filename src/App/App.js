import React, { useEffect, useState } from 'react'


import Header from '../components/Header/Header'
import List from '../components/List/List'
import Map from '../components/Map/Map'
import PlaceDetails from '../components/PlaceDetails/PlaceDetails'
import { CssBaseline, Grid,} from '@mui/material'
import './styles.css'
import getPlacesData from '../api'

export default function App() {

  const [places, setPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0})
  const [bounds, setBounds] = useState({})



  useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) =>{setCoordinates({lat: latitude, lng: longitude})})
  }
  ,[])  

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then(
      (data) => {
        setPlaces(data)
        console.log(data)
      }
    )
  }, [coordinates, bounds])

  return (
    <div className = 'appContainer'>
      <CssBaseline/>
      <Header/>
      <Grid container spacing = {3} style = {{width: '100%'}}>
          <Grid item xs = {12} md = {4} >
            <List places = {places} coordinates = {coordinates} setCoordinates={setCoordinates}/>
          </Grid>
          <Grid item xs = {12} md = {8}>  
            <Map setCoordinates = {setCoordinates}
              coordinates = {coordinates}
              setBounds = {setBounds}
              places = {places}
            />            
          </Grid>
      </Grid>
    </div>
  )
}