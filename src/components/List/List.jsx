import {useState, React} from 'react'
import { Typography, FormControl, InputLabel, Select, MenuItem, Grid, Card, Button, IconButton } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './styles.css'
import OpenWithIcon from '@mui/icons-material/OpenWith';

export default function List( {places, setCoordinates, coordinates} ) {
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('0')
    

    const positionJump = () => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) =>{setCoordinates({lat: latitude, lng: longitude})})
        console.log(coordinates)
    }
    return (
        <div className = 'container'>
            <div > 
                <Typography variant = 'h4'>Restaurants & Attractions around you</Typography>
            </div>
            <div className = 'formContainer'> 
                <FormControl className = 'formControl'>
                <InputLabel >Type</InputLabel>
                <Select value = {type} onChange = {(e)=> {setType(e.target.value)}}>
                    <MenuItem value = 'restaurants'>restaurants</MenuItem>
                    <MenuItem value = 'hotels'>hotels</MenuItem>
                    <MenuItem value = 'attractions'>attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className = 'formControl' sx={{ minWidth: 120 }}>
                <InputLabel>Rating</InputLabel>
                <Select value = {rating} onChange = {(e) => {setRating(e.target.value)}}>
                    <MenuItem value = {0}>All</MenuItem>
                    <MenuItem value = {3}>Above 3.0</MenuItem>
                    <MenuItem value = {4}>Above 4.0</MenuItem>
                    <MenuItem value = {4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl> 
            <Button className = 'jumpButton' onClick = {positionJump}>Jump to Current Location </Button>
            </div>
            <div className = 'list'>
                <Grid container spacing = {3}  >
                {places?.map((place, i) => (
                    <Grid item key = {i} xs = {12} >
                        <PlaceDetails place = {place} />
                    </Grid>
                ))}
            </Grid>
            </div>
            
        </div>
    )
}