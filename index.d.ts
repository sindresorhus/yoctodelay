/**
Delay the promise and then resolve.

@param ms Milliseconds to delay the promise.

@example
```
const delay = require('yoctodelay');

(async () => {
	foo();

	await delay(100);

	// Executed 100 milliseconds later
	bar();
})();
```
*/
declare function delay(ms: number): Promise<void>;

export = delay;
