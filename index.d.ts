/**
Delay the promise and then resolve.

@param milliseconds - The duration to delay the promise.

@example
```
import delay from 'yoctodelay';

foo();

await delay(100);

// Executed 100 milliseconds later
bar();
```
*/
export default function delay(milliseconds: number): Promise<void>;
