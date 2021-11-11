import React, {useEffect} from 'react';
import Carou from './Carou';
import './Home.css'

const Home = () => {

    useEffect(() => {
        
        localStorage.clear();
    }, [])


    return (
        <div className="container">
            <main>
                <header className="title">
                    <h1 >Welcome to UsatoLebanon</h1>  
                    <p >From USA tech companies to lebanese consumers. Our business aim is to bring the best value for your money!</p>
                </header>
            </main>
            <div>
                <Carou />
            </div>

        </div>

    )
};



export default Home;