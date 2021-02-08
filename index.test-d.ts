import {expectType} from 'tsd';
import delay = require ('.');

expectType<Promise<void>>(delay(100));
