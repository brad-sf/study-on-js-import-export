// multiple named
import * as maths from './maths';
import {times} from './maths';

const x = 10;
const y = 20;

if (maths.isInt(x)) {
	console.log(maths.plus(x,y));
	console.log(times(x,y));
}

// default
import mynumber from './mypi';

console.log(mynumber());

