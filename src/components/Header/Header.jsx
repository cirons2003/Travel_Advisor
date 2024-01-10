import React from 'react'
import {AppBar, Toolbar, Typography, Box, Autocomplete, InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import './styles.css'

export default function Header() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar className = 'toolbar'>
                    <Typography variant = 'h5' className = 'title'>
                        Travel Advisor
                    </Typography>   
                    <Box display = 'flex'>
                        <Typography variant = 'h6' className = 'titleRight'>
                            Explore new places
                        </Typography>
                        {/*<AutoComplete>*/}
                            <div className='search'>
                                <div className = 'searchIcon'>
                                    <SearchIcon className = 'icon-bold'/>
                                </div>
                                <InputBase placeholder = 'Search...' classes = {{root: 'inputRoot', input: 'inputInput'}}/>
                            </div>
                        {/*<Autocomplete>*/}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}