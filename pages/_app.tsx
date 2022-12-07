import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import { useEffect } from 'react'
export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        if (localStorage.getItem("favorites") === null) {
            /***
             * Means that the `favorites` variable on localStorage is non-existent, then create it.
             */
            localStorage.setItem("favorites", JSON.stringify([]));
        }
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}