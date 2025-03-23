const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
const fs = require('fs');

const questionTypeControllerPath = path.resolve(__dirname, '../controllers/questionType.controller.js')
const questionTypeContent = fs.readFileSync(questionTypeControllerPath, 'utf-8')

const healthControllerPath = path.resolve(__dirname, '../controllers/health.controller.js')
const healthControllerContent = fs.readFileSync(healthControllerPath, 'utf-8');

// const domainControllerPath = path.resolve(__dirname, '../controllers/domain.controller.js')
// const domainControllerContent = fs.readFileSync(domainControllerPath, 'utf-8');

// const programControllerPath = path.resolve(__dirname, '../controllers/program.controller.js')
// const programControllerContent = fs.readFileSync(programControllerPath, 'utf-8');



const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Batch API',
      version: '1.0.0',
      description: 'API documentation for the Batch controller',
    },
  },
  apis: [questionTypeControllerPath, healthControllerPath],
  content: questionTypeContent, healthControllerContent,
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
