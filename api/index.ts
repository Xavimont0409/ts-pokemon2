require('dotenv').config();
import server from './src/app'
import db from './src/database/models/index'

const port = process.env.PORT

db.sequelize.sync().then(() => {
	server.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	})
})