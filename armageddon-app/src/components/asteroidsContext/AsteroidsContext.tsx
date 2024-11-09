import {createContext, FC, ReactNode, useState } from 'react';

export const AsteroidsContext = createContext(null);

//тип для props
type AsteroidsContextProviderProps = {
    children?: ReactNode; //узел react-дерева
};

//React-контекст
export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({
    children,
}) => {
    const [onlyDangerous, setOnlyDangerous] = useState(false); //признак "опасных" астероидов
    const [distanceMode, setDistanceMode] = useState(true); //тип единиц для отображения расстояния (true - км)
    const [destroyment, setDestroyment] = useState([]); //массив астероидов для уничтожения
    const [choosedAsteroid, setChoosedAsteroid] = useState(null); //выбранный астероид

    //выбор астероида
    const addChoosedAsteroid = (asteroid) => {
        setChoosedAsteroid(asteroid);
    };

    //добавление астероида в список на уничтожение
    const addAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter(item => item.id !== asteroid.id), asteroid]);
    }

    //удаление астероида из списка на уничтожение
    const deleteAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter(item => item.id !== asteroid.id)]);
    }

    return (
        <AsteroidsContext.Provider
            value={{
                onlyDangerous,
                setOnlyDangerous,
                distanceMode,
                setDistanceMode,
                destroyment,
                addAsteroid,
                deleteAsteroid,

                choosedAsteroid,
                addChoosedAsteroid
            }}
        >
            {children}
        </AsteroidsContext.Provider>
    );
};
