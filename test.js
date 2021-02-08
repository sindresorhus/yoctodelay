import {serial as test} from 'ava';
import timeSpan from 'time-span';
import inRange from 'in-range';
import delay from '.';

test('main', async t => {
	const end = timeSpan();
	await delay(50);
	t.true(inRange(end(), 30, 70), 'is delayed');
});
