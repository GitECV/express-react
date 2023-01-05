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
<<<<<<< HEAD:server/src/index.js
app.get("/api/:songId", (req, res) => {
	const query = 'SELECT * FROM tickets WHERE iTicketId = ' + req.params.songId

=======
app.get('/song/:songId', (req, res) => {
	const query = 'SELECT * FROM tickets WHERE iTicketId = ' + req.params.songId
>>>>>>> 57dc0d33582c04bc337c9b8f7c62e763c6923d09:src/index.js
	connection.query(query, (err, rows, fields) => {
		if (err) throw err

		if (rows[0].bIsUsed) {
<<<<<<< HEAD:server/src/index.js
			res.json('Acceso denegado');
=======
			res.send('Acceso aprobado');
			res.redirect('/about');
>>>>>>> 57dc0d33582c04bc337c9b8f7c62e763c6923d09:src/index.js
		} else {
			res.json("Acceso aprobado");
		}
	})
})

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})
