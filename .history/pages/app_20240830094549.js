import { Component } from 'react'
import '../styles/globals.css'
import NavBar from '@/components/NavBar/NavBar';

const app = ({ Component, pageProps }) => (
    <div>
        <NavBar />
        <Component {...pageProps} />
    </div>
);

export default app;