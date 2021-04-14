import React from 'react';
import { Card } from '../../components'
import data from '../../data'
import { useParams } from "react-router-dom";
  
function CardPage(){
    let { id } = useParams();
        return (
            <Card data={data[id - 1]}/>
        )
}


export default CardPage;