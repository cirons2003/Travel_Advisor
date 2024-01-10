import React from 'react'
import './styles.css'
import {Link, Box, Card, CardContent, CardMedia, Chip, Typography, Button, CardActions } from '@mui/material'
import { PlaceSharp } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn'





export default function PlaceDetails({place, listExpanded}) {
    return (
        <Card elevation ={6} a = {place.website}>
            <CardMedia style = {{height: 350}}
                image = {place.photo ? place.photo.images.large.url : 'https://tse2.mm.bing.net/th?id=OIP.KulseCsB0TYfGYCtxlVLbQAAAA&pid=Api&P=0&h=220'}
                title = {place.name}
            />
            <CardContent>
                <Typography gutterBottom variant = 'h5'>{place.name ? place.name : 'No name available '}</Typography>
                <Box display = 'flex' justifyContent ='space-between'>
                    <Typography variant = 'subtitle1'>Price</Typography>
                    <Typography gutterBottom variant = 'subtitle1'>{place.price_level}</Typography>
                </Box>
                <Box display = 'flex' justifyContent ='space-between'>
                    <Typography variant = 'subtitle2'>Ranking</Typography>
                    <Typography gutterBottom variant = 'subtitle2'>{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box display = 'flex' justifyContent = 'space-between'>
                        <img src = {award.images.small} alt = {award.display_name}/>
                        <Typography variant = 'subtitle2'>{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name}) => (
                    <Chip key = {name} size = 'small' label = {name} className = 'chip'/>
                ))}
                <CardActions>
                    <Button size = 'small' onClick = {() => window.open(place.web_url)}>
                        Trip Advisor
                    </Button>
                    <Button size = 'small' onClick = {() => window.open(place.website)}>
                        Website
                    </Button>
                </CardActions>

            </CardContent>
        </Card>
        
    )
}