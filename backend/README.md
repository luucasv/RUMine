# RUMine Backend

## Usage

### 1. Install dependencies
    $ npm install

### 2. Create config file
The config.js file will contain some secret values needed to create the server.
It needs:
 - **secret_string**: A secret random string used to encrypt data
 - **database_link**: link to the databese.

Example: 
```js
export const secret_string = 'my little secret';
export const database_link = 'mongodb://localhost/RUMine';
```

This example is on config_example.js, you can rename it and use for tests.

### 3. Start server
    $ npm start

## Folder organization

### Models
Each database model will hava a file in this folder with the name "model_name.js". And it will only describe the model and export it.

### Controllers
Each model will have one or more controllers. They will be responsible for every query needed on the models database.

### Routes
Code in this folder will connect each route to its correspodent query.