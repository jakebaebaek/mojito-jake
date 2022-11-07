import styles from './Storage.module.css' // ../은 상위폴더
import Card from './Card.js'
import { useEffect } from "react";

import { useSelector } from 'react-redux';

//contect
import { useContext } from 'react';
import { APIContext } from '../context/APIContext';

function Storage() {

    //context 모든 칵테일 API
    const API = useContext(APIContext);
    const useID = useSelector((state) => state)

    const reduxState = useSelector(state => state);
    const storeCocktail = reduxState.store

    //api 정제
    const fav = API.filter((val) => (
        storeCocktail.includes(val.name)
    ))


    return (
        <div className={styles.wrapper}>
            <div className={styles.cardContainer}>
                {
                fav.map((cocktail) =>
                        (
                        <Card
                            key={cocktail._id.$oid}
                            id={cocktail._id.$oid}
                            img={cocktail.S3_img}
                            name={cocktail.name}
                        />
                    )
                )}
                
            </div>
        </div>                  
    )
};
export default Storage;