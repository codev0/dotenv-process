# dotenv-process

Dotenv-process adds ability to process each environment variable on top of 
[dotenv](http://github.com/motdotla/dotenv).

Made from advices in this [conversation](https://github.com/kerimdzhanov/dotenv-flow/issues/21).

Highly inspired by [dotenv-expand](https://github.com/motdotla/dotenv-expand),

## Install

```bash
npm install dotenv --save
npm install dotenv-process --save
```

## Usage

As early as possible in your application, require dotenv and dotenv-process, and
wrap dotenv-process around dotenv.

```js
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-process')

const myEnv = dotenv.config()
dotenvExpand(myEnv)
```

See [test/.env](./test/.env) for examples of variable expansion in your `.env`
file. 

## Thanks for
1. [@kerimdzhanov](https://github.com/kerimdzhanov) for advices.
2. [@Rahirim](https://github.com/Rahirim) for contributing.
