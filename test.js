import {serial as test} from 'ava';
import timeSpan from 'time-span';
import inRange from 'in-range';
import m from '.';

test('main', async t => {
	const end = timeSpan();
	await m(50);
	t.true(inRange(end(), 30, 70), 'is delayed');
});
