# yoctodelay [![Build Status](https://travis-ci.org/sindresorhus/yoctodelay.svg?branch=master)](https://travis-ci.org/sindresorhus/yoctodelay)

> Delay a promise a specified amount of time

It's less than half the size of the [`nanodelay`](https://github.com/ai/nanodelay) module.


## Install

```
$ npm install yoctodelay
```


## Usage

```js
const delay = require('yoctodelay');

(async () => {
	foo();

	await delay(100);

	// Executed 100 milliseconds later
	bar();
})();
```


## API

### delay(ms)

Delay the promise and then resolve.

#### ms

Type: `number`

Milliseconds to delay the promise.


## FAQ

### What is yocto?

[It's the smallest official unit prefix in the metric system.](https://en.wikipedia.org/wiki/Yocto-) Much smaller than nano.

### Is this a joke?

Partly. The `nanodelay` module was created only because the `delay` module is a tiny bit larger. Well, this module is a tiny bit smaller than the `nanodelay` module. Comparing size at the byte level is super silly. It doesn't matter unless the difference is more than many kilobytes. This is still a fully working module though. Go ahead and use it.


## Related

- [delay](https://github.com/sindresorhus/delay) - Similar to this module but with more features
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
