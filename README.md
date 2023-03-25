# leo-sdk

## Installation

For development, run the following command to install the required dependencies:

```
npm install
```

For final users, install leo-sdk as follows:

```
npm install leo-sdk
```

## Running tests

Before running the tests, ensure that you have updated or created the .env file with your API token:

```
API_TOKEN=<your api token here>
```

To run the tests, execute the following command:

```
npm run test
```

## Usage

Here is an example of how to use leo-sdk:

```ts
import { Movie, TheOneApiSdk } from 'leo-sdk';

const sdk = TheOneApiSdk.new("<api key>");

const main = async () => {
  const movies = await sdk.listMovies();
  // ...
};


```