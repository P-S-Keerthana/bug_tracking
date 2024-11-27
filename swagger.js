const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerFolder = path.join(__dirname, '../docs');

const setupSwaggerDocs = (app) => {
    fs.readdirSync(swaggerFolder).forEach((folder) => {
        const folderPath = path.join(swaggerFolder, folder);
        fs.readdirSync(folderPath).forEach((file) => {
            if (file.endsWith('.yaml')) {
                const swaggerDoc = YAML.load(path.join(folderPath, file));
                const apiPath = `/api-docs/${folder}`;
                app.use(apiPath, swaggerUi.serve, swaggerUi.setup(swaggerDoc));
                console.log(`Swagger docs available at: ${apiPath}`);
            }
        });
    });
};

module.exports = setupSwaggerDocs;
