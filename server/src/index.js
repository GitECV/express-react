const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mysql = require('mysql')

const app = express()

// Objeto de conexión con MySQL
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'spotifyapp',
})

connection.connect()

// Settings
app.set('port', process.env.PORT || 5000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// API
app.get("/api/:songId", (req, res) => {
	const query = 'SELECT * FROM tickets WHERE iTicketId = ' + req.params.songId

	connection.query(query, (err, rows, fields) => {
		if (err) throw err

		if (rows[0].bIsUsed) {
			res.json('Acceso denegado');
		} else {
			res.json("Acceso aprobado");
		}
	})
})

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})
