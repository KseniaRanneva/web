import { createContext } from 'react';
import { FC, ReactNode, useState } from 'react';

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

    return (
        <AsteroidsContext.Provider
            value={{
                onlyDangerous,
                setOnlyDangerous,
                distanceMode,
                setDistanceMode,
            }}
        >
            {children}
        </AsteroidsContext.Provider>
    );
};
