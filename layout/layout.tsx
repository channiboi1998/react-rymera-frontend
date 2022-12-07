import { Container } from '@mui/material'
import React from 'react'
import Header from '../components/header/header'
import Style from '../styles/layout/layout.module.css'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Header />
            <Container className={Style.section}>
                {children}
            </Container>
        </React.Fragment>
    )
}

export default layout