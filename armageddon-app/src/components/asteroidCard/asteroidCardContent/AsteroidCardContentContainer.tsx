//компонент для связи AsteroidCardContent с контекстом
import {AsteroidCardContent} from "./AsteroidCardContent";
import {useContext} from "react";
import {AsteroidsContext} from "../../asteroidsContext/AsteroidsContext";

export const AsteroidCardContentContainer = (props) => {
    const {distanceMode} = useContext(AsteroidsContext);    //значение из React-контекста
    return <AsteroidCardContent {...props} distanceMode={distanceMode}/>
}