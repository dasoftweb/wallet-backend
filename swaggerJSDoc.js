
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Wallet',
    version: '1.0.0',
    description: 'Express API for the Wallet, here are the routes',
  },
};
const options = {
  swaggerDefinition,
  definition: {
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server'
      },
      {
        url: 'https://connections-api.herokuapp.com/docs/',
        description: 'Production server'
      }
    ]
  },
  apis: ['/api/index.js'],
}

const specs = swaggerJSDoc(options);
const swaggerDoc = app => {
  app.use('/doc', swaggerUI.serve, swaggerUI.setup(specs))
}

module.exports = swaggerDoc

// routes\api\auth


//   @swagger
//   // /api/auth/login:
//   post:
//    teg: 'Public Routers'
//    requestBody:
//    content: 'application/json'
//        schema:
//            type: object
//            required: 'email', 'password'
//             properties:
//                 email:
//                     type: string
//                     example: 'username@mail.com'
//                 password:
//                    type: string
//                     example: 'userPassword'
//             responses:
//                    200:
//                     discription: 'json with User data create'
//                    content: application/json:
//                        schema:
//                            type: object
//                                properties:
//                                    user:
//                                        type: object
//                                        example: {}
//                                    token: string
//                                    example: '' //подставить любой токен
//                     400:
//                     discription: 'not correct data',
//                     content: application/json:
//                        schema:
//                            type: object
//                            properties:
//                                message:
//                                    type: string
//                                    example: 'error'
//  /api/auth/signUp:
//    post:
//        tegs:
//            -Public Routes
//            requestBody:
//            content: application/json:
//                schema:
//                    type: object
//                    required:
//                        - email
//                        - password
//                        - name
//                    properties:
//                        name:
//                            type: string
//                        password:
//                            type: string
//                        responses:
//                        200:
//                            discription: 'return User data'
//                        400:
//                            discription: 'not correct data request'
//                                content:
//                                    application/json:
//                                        schema:
//                                            type: object
//                                            properties:
//                                            message:
//                                                type: string
//                                                example: 'error'
//  /api/auth/logout:
//     get:
//        tags:
//            - Public Routes
//            response:
//                    200:
//                        discription: 'Return message: "User successfully logout"'
//    /api/wallet/transactions:
//        post:
//            security:
//                type: https
//                    schema: bearer
//                    bearerFormat: JWT
//                    tags:
//                        - Protected Routers
//                        requestBody:
//                            content:
//                                application/json:
//                                    schema:
//                                        type: object
//                                        required:
//                                            - email
//                                            - password
//                                        properties:
//                                            id:
//                                                type: string
//                                                example: "id"
//                                            data:
//                                                type: string
//                                                example: "data"
//                                            category:
//                                                type: string
//                                                example: "category"
//                                            comments:
//                                               type: string
//                                                example: "comments"
//                                            amount:
//                                                type: string
//                                                example: "amount"
//                                            parameters:
//                                                - in: header
//                                            name: Authorization
//                                            required: true
//                                                schema:
//                                                    type: object
//                                                    properties:
//                                                        transactions:
//                                                            type: object
//          get:
//            security:
//                type: https
//                schema: bearer
//                bearerFormat: JWT
//         tags:
//            - Protected Routers
//            parameters:
//                - in: header
//            name: Authorization
//            required: true
//            schema:
//                type: string
//                description: When you login write token to localStorage.
//                responses:
//                    200:
//                        description: Return json with transactions  and total balance
//                        content:
//                            application/json:
//                                schema:
//                                    type: object
//                                    properties:
//                                        total balans:
//                                            type: string
//                                            data:
//                                                type: object
//                                            transactions:
//                                                type: object
