const express = require('express')  //подключение express (объект, в который импортируется зависимость)
const path = require('path')    //модуль для работы с путями к файлам (путь к папке, в которой запущен сервер)
const fs = require('fs')              //модуль для работы с файлами
const app = express()       //объект веб-сервера
const port = 3000               //порт - идентификатор процесса, который обработает входящий запрос

app.use(express.json())                   //промежуточный обработчик для анализа JSON-запроса и помещения его данных в req.body
app.use(express.urlencoded())             //промежуточный обработчик для анализа запроса в кодировке URL-адреса
app.use(express.static('static'))    //промежуточный обработчик для использования статических ресурсов

//GET определяет обработчики для входящих get-запросов (* - любой маршрут)
app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, "./static")})
})

//POST определяет обработчики при отправке формы
app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err) => {
        if (err) {
            res.status(500).send("User not added")
        }
        else {
            res.status(201).send("User added")
        }
    })
})

//привязка объекта сервера к порту
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})