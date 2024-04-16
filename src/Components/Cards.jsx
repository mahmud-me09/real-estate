import React, { useEffect, useState } from 'react';
import Card from './Card';
import { lazy } from "react";

const Cards = () => {
    const [estates, setEstates] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setEstates(data.properties))
        .catch(error => console.error(error.message))
    },[])
    return (
		<div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
			{estates.map((estate) => (
				<Card key={estate.id} estate={estate}></Card>
			))}
		</div>
	);
};

export default Cards;