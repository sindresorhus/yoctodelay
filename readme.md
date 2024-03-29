# yoctodelay

> Delay a promise a specified amount of time

It's less than half the size of the [`nanodelay`](https://github.com/ai/nanodelay) module.

**Note:** If you target Node.js 16 or later, you can use the built-in functionality instead:

```js
import {setTimeout as delay} from 'node:timers/promises';

await delay(100);
```

## Install

```
$ npm install yoctodelay
```

## Usage

```js
import delay from 'yoctodelay';

foo();

await delay(100);

// Executed 100 milliseconds later
bar();
```

## API

### delay(milliseconds)

Delay the promise and then resolve.

#### milliseconds

Type: `number`

The duration to delay the promise.

## FAQ

### What is yocto?

[It's the smallest official unit prefix in the metric system.](https://en.wikipedia.org/wiki/Yocto-) Much smaller than nano.

### Is this a joke?

Partly. The `nanodelay` module was created only because the `delay` module is a tiny bit larger. Well, this module is a tiny bit smaller than the `nanodelay` module. Comparing size at the byte level is super silly. It doesn't matter unless the difference is more than many kilobytes. This is still a fully working module though. Go ahead and use it.

## Related

- [delay](https://github.com/sindresorhus/delay) - Similar to this module but with more features
- [yoctocolors](https://github.com/sindresorhus/yoctocolors) - The smallest and fastest command-line coloring package on the internet
- [More…](https://github.com/sindresorhus/promise-fun)
