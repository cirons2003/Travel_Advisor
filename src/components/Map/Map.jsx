import React, {useEffect} from 'react'
import GoogleMapReact, {Marker} from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material'


import './styles.css'

export default function Map({places, setCoordinates, coordinates, setBounds}) {

    const onDesktop = useMediaQuery('(min-width:600px)') 

    return (
        <>
            <div className = 'mapContainer'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_BOOTSTRAP_KEY}}
                    defaultCenter={{lat: 0, lng: 0}}
                    center = {coordinates}
                    defaultZoom={14}
                    margin = {[50 ,50 ,50 ,50]}
                    options = {''}    
                    onChange = {(e) => {
                        setCoordinates({lat: e.center.lat, lng: e.center.lng})
                        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    }}
                    onChildClick = {() => {}}
                >   

                </GoogleMapReact>
            </div>
        </>
    )
}