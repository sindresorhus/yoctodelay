import test from 'ava';
import timeSpan from 'time-span';
import inRange from 'in-range';
import delay from './index.js';

test.serial('main', async t => {
	const end = timeSpan();
	await delay(50);
	t.true(inRange(end(), {start: 30, end: 70}), 'is delayed');
});
