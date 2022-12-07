import { Grid } from '@mui/material'
import React from 'react'
import MoviesListEntry from './moviesListEntry'

const moviesList = ({ movies }: any) => {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                {movies.map((movie: any) => {
                    return (
                        <MoviesListEntry key={movie.id} movie={movie}></MoviesListEntry>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

export default moviesList