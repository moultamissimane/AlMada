# ALMADA

Al Mada is a node/express JS and React js and GraphQL/ApolloServer application used to learn how to dockerize a react app .

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install AlMada.

```bash
yarn
```

## Create Docker file for node js
    
    ```bash
    touch Dockerfile
    ```

Inside your Dockerfile add:
    
    ```python
    <!-- # FROM: install the image of the Node.js version. -->
    FROM node:16.16.0-alpine
    <!-- # WORKDIR: path of the working directory. -->
    WORKDIR /app
    <!-- # COPY: copy the package.json file to the working directory. -->
    COPY package.json .
    <!-- # RUN: install the dependencies. -->
    RUN yarn
    <!-- # COPY: copy the rest of the files to the working directory. -->
    COPY . .
    <!-- # EXPOSE: expose the port 3000. -->
    EXPOSE 8080
    <!-- # CMD: run the command to start the server. -->
    CMD ["yarn", "start"]
    ```



## Create GraphQL server

```bash	
yarn add express express-graphql graphql --save
```


Inside your server.js add:

```python

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
