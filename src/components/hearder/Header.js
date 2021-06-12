import React from 'react'
import { Divider,Typography,Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
const Header= ()=>{
    return(
        <Box alignItems="center" textAlign="center">
            <Link to="/"> 
            <Typography variant="h4" >Quiz app XXXXX</Typography>
            </Link>
            
            <Divider/>
        </Box>
    )
}

export default Header