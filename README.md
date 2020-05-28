# Tooling
This stack uses:
  - npm for dependency management (https://www.npmjs.com)
  - next-gen javascript compiler babel (https://babeljs.io)
  - javascript linter eslint for code quality (https://eslint.org)
  - prettier for code formating (https://prettier.io)
  - jest for unit testing (https://jestjs.io)
  - cloudformation as IaC framework (https://aws.amazon.com/cloudformation/)
  - serverless framework for package and deployment support (https://www.serverless.com)

# Deployment

Run...

```console
# aws authentication
foo@bar:~$ aws configure

# dependency management
foo@bar:~$ npm i 

# build & deploy
foo@bar:~$ npm run deploy 
``` 

have fun...


