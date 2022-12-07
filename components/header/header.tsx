import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'

const header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" className="logo">Movies</Link>
                </Typography>
                <Link href="/" className="followButton">
                    <Button color="inherit">All Movies</Button>
                </Link>
                <Link href="/my-list" className="followButton">
                    <Button color="inherit">My List</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default header