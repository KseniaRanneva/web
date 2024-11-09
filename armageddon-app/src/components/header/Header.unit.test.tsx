import { Header } from './Header';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


//тестирование Header
describe('[components] Header', () => {
    beforeEach( () => {
        render(<BrowserRouter><Header/></BrowserRouter>);
    });

    //тест "Header должен содержать элемент заголовка"
    it('should contains common header html element', () => {
        const header = screen.getByRole('heading');
        expect(header).toBeInTheDocument(); //проверка наличия элемента на странице
        expect(header).toHaveTextContent("ARMAGGEDON V"); //проверка текста внутри элемента
    });

    //тест "Header содержит ссылки на страницы 'Астероиды' и 'Уничтожение'"
    it('should contains links to asteroids and destroyment pages', () => {
        const links = screen.getAllByRole('link');
        //проверка атрибутов
        expect(links[0]).toHaveAttribute("href", "/asteroids");
        expect(links[1]).toHaveAttribute("href", "/destroyment");
    });

    //тест, имитирующий нажатие на кпоку
    it('should contains button, after click on it should hide button and display input', () => {
        const button = screen.getByText('Ввести API-ключ');
        expect(button).toBeInTheDocument(); //проверка наичия кнопки
        expect(screen.queryByTestId('api_key_input')).not.toBeInTheDocument();
        fireEvent.click(button); //имитация нажатия
        //ожидание перерисовки и проверка отсутствия кнопки и наличия поля для ввода
        waitFor(() => {
            expect(button).not.toBeInTheDocument();
            expect(screen.getByTestId("api_key_input")).toBeInTheDocument();
        });
    }); 
});