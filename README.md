
# TSCMT

> An CMT API wrapper, written in TypeScript to interact with CMT blockchain.

[![npm](https://img.shields.io/npm/dt/CMT-ts.svg)]()
[![npm](https://img.shields.io/npm/v/CMT-ts.svg)]()
[![license](https://img.shields.io/github/license/CMTecosystem/CMT-ts.svg)]()

TSCMT is a library client designed to facilitate how you interact with the CMT blockchain.

## Why TypeScript

  * TypeScript is is a superset of JavaScript which mainly offers optional static typing, classes, and interfaces. The learning curve is not that steep.
  * Types are optional, TSCMT compiles into ES5 so you can work with both, ECMAScript or TypeScript.
  * A better development experience, including auto-complete and fully documented.

## Documentation

> [API documentation](https://CMTecosystem.github.io/CMT-ts/) is hosted on github pages, and is generated from [TypeDoc](https://github.com/TypeStrong/typedoc).

## Installation

TSCMT is avaliable from `npm`.

```bash
yarn add CMT-ts
```

or

```bash
npm i CMT-ts --save
```

## Usage

For the best TypeScript experience, you should either use [Visual Studio Code](http://code.visualstudio.com/), or a [plug-in for your favorite text editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

### Basic Examples

> Get delegate list from Devnet network.

```js
import { Client, Network, NetworkType } from 'CMT-ts';

const devnet = Network.getDefault(NetworkType.Devnet);
const client = new Client(devnet);

client.delegate.list().subscribe((list) => {
  console.log(list);
});
```

> Get address from passphrase.

```js
import { PrivateKey } from 'CMT-ts/core';

// if no specify a second param, default is mainnet
const key = PrivateKey.fromSeed('my secret passphrase');
console.log(key.getPublicKey().getAddress()); // AaWU6X3pGdtSCK3s9weo9tjth64F3hixgT
```

For more examples please see documentation or look for tests in each directory.

## Running the tests

```bash
npm run test
```

## Contributing

  * If you find any bugs, submit an [issue](../../issues) or open [pull-request](../../pulls), helping us catch and fix them.
  * Engage with other users and developers on [CMT Slack](https://CMT.io/slack/).
  * Join the #development channel on Slack or contact our developer Lúcio (@lorenzo).
  * [Contribute bounties](./CONTRIBUTING.md).

## Credits

**Lúcio Rubens** - [@luciorubeens](https://github.com/luciorubeens);

## License

TSCMT is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
