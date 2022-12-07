import React from 'react'
import Head from 'next/head'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

/***
 * NextJS Method that runs at build time. Fetching the movie on WordPress backend.
 */
export const getServerSideProps = async (context: any) => {
    const response = await fetch(`http://localhost/wp-json/rymera/v1/movies/${context.params.id}?_embed`);
    const data = await response.json();
    return {
        props: {
            data
        }
    }
}

const Movie = ({ data }: any) => {

    if (data.data?.status === 404) {
        /***
         * Means that the post is non existent on the WordPress Backend.
         */
        return (
            <React.Fragment>
                <Head>
                    <title>Movie Not Found | Watch Movies Online for Free</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Box>
                <Typography variant="h1" fontSize="40px" gutterBottom>
                    Movie Not Found.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    The movie you are looking for must have been deleted by the admin.
                </Typography>
                <Link href="/">Get Back</Link>
            </Box>
            </React.Fragment>
        )
    }

    /***
     * Means that the movie is found. Displaying the details on the frontend.
     */
    const movie = data[0];
    return (
        <React.Fragment>
            <Head>
                <title>Watch {movie.title.rendered} Online Free</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box>
                <Typography variant="h1" fontSize="40px" gutterBottom>
                    {movie.title.rendered}
                </Typography>
                <img src={movie._embedded['wp:featuredmedia'][0].source_url} width="300px" />
                <Typography variant="body1" gutterBottom>
                    {movie.content.rendered}
                </Typography>
                <Link href="/">Get Back</Link>
            </Box>
        </React.Fragment>
    )
}

export default Movie