import React from 'react'
import Link from 'next/link'
import Favorites from './favorites'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material'
import Style from '../../styles/movies/moviesListEntry.module.css'

const moviesListEntry = ({ movie }: any) => {

    return (
        <React.Fragment>
            <Grid item xs={12} md={3} className={Style.container}>
                <Card className={Style.card}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={movie._embedded['wp:featuredmedia'][0].source_url}
                        className={Style.image}
                    />
                    <CardContent className={Style.cardContent}>
                        <Favorites movie={movie} />
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.title.rendered}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie.excerpt.rendered}
                        </Typography>
                    </CardContent>
                    <CardActions className={Style.readMore}>
                        <Link href={`/movies/${movie.id}`}>
                            <Button size="small">Read More</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    )
}

export default moviesListEntry