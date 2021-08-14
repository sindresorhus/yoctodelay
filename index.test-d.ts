import {expectType} from 'tsd';
import delay from './index.js';

expectType<Promise<void>>(delay(100));
