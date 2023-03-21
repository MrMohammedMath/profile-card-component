import { useState, useEffect } from "react";
import {Card, ICard} from './components/Card';
import './scss/app.scss';

export default function App() {
    const [data, setData] = useState<ICard | undefined>(undefined);
    
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(json=> setData(json));
    }, [])

    return (
        <>
            {
                data &&
                <Card data={data as ICard}/>
            }
            
        </>
    );
}