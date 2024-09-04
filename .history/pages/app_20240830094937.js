import { Component } from 'react'
import '../styles/globals.css'
import { NavBar } from '@/components/componentindex';

const app = ({ Component, pageProps }) => (
    <div>
        <NavBar />
        <Component {...pageProps} />
    </div>
);

export default app;