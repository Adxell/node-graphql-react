import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { DataSource } from 'typeorm'

import { Users } from './entities/Users'
import { schema } from './schema'


const main = async () => {
    const AppDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "user_db",
        password: "secret_db",
        database: "product",
        logging: false,
        synchronize: true,
        entities: [Users]
    })
    AppDataSource.initialize()
        .then(() => {
            // here you can start to work with your database
            console.log('connected to database')
        })
        .catch((error) => console.log(error))

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log("Server running on port 3001")
    })
}

main().catch((error) => {
    console.log(error)
})