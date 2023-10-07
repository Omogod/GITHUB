import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'


const app = express();  

const swaggerDefinition = {
    openapi: '3.0.0',
    info: { 
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: ['index.js'],
};

const swaggerSpec = swaggerJSDoc(options);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



/**
 * @swagger
 * /swagger:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/swagger', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send('swaggerSpec');
})


app.listen(3009, () => {
    console.log('Server is running on port 3000');
} );