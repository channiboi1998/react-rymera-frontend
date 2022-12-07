import Router from 'next/router'
import { Box, Typography, Grid, Stack, Pagination } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import MoviesList from '../components/movies/moviesList'

/***
 * NextJS Method that runs at build time. This is the index page so wer are fetching the movies on WordPress backend.
 */
export const getServerSideProps = async (context: any) => {
    
    let { page } = context.query;
    if (!page) {
        page = 1;
    }

    const response = await fetch(`http://localhost/wp-json/rymera/v1/movies?paged=${page}&_embed`);
    const data = await response.json();
    return {
        props: {
            data,
            page: page,
            totalPages: response.headers.get('x-wp-totalpages')
        }
    }

}

const Home = ({ data, page, totalPages }: any) => {

    if (data.data?.status === 404) {
        /***
         * Means that the movies are non existent on the WordPress Backend.
         */
        return (
            <React.Fragment>
                <Head>
                    <title>Movies Not Found | Watch Movies Online for Free</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Box>
                <Typography variant="h1" fontSize="40px" gutterBottom>
                    Movies Not Found.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    The movies you are looking for must have been deleted by the admin.
                </Typography>
            </Box>
            </React.Fragment>
        );
    }

    /***
     * Means that there are movies found. Displaying the details on the frontend.
     */    
    return (
        <React.Fragment>
            <Head>
                <title>Rymera Movies Online</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" fontSize="40px" gutterBottom>
                            Rymera Movies: Page {page}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} alignItems="right">
                        <Stack spacing={2}>
                            <Pagination
                                count={Number(totalPages)}
                                color="primary"
                                className="pagination"
                                page={Number(page)}
                                onChange={(event, pageNumber) => Router.push(`?page=${pageNumber}`)}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <MoviesList movies={data} />
            </Box>
        </React.Fragment>
    )
}

export default Home