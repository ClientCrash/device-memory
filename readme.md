# Device Memory
![npm](https://img.shields.io/npm/v/device-memory?style=flat-square)

## Description

This middleware extracts the `Device-Memory` header from incoming HTTP requests and attaches it to the request object for your convenience. If the `Device-Memory` header is not present, it defaults to -1. The value is limited to a maximum of 8, representing 8 gigabytes or more of memory.
It's important to note that the availability and accuracy of the Device-Memory header depend on the client's browser support and settings. Not all browsers or devices support this feature, and users can opt to disable it.

## Installation

You can install Device Memory from npm:

```sh
npm install device-memory
```

## Usage

Here's a basic example of how to use Device Memory in an Express application:

```js
import express from 'express';
import deviceMemory from 'device-memory';

const app = express();

app.use(deviceMemory);

app.get('/', (req, res) => {
  res.send(`Your device has ${req.deviceMemory} GB of memory.`);
});

app.listen(3000);
```

In this example, the `req.deviceMemory` property is set by the Device Memory middleware and can be used in your route handlers.

## License

Device Memory is [MIT licensed](./LICENSE).