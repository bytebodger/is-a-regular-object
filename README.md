# is-a-regular-object

`is-a-regular-object` is a tiny, dead-simple utility function for identifying regular JavaScript objects. In JavaScript, a `NULL` will show a `typeof` "object". An array will also show a `typeof` "object". This function returns `TRUE` for non-`NULL`, non-array objects - and it returns `FALSE` for everything else.

**NOTE:** This package is for "vanilla" JS. As such, it will identify React elements as being "regular" objects. If you're working in a React project, you should consider using `@toolz/is-a-regular-object-react`.

## Usage

After installation, import the package:

```javascript
import { isARegularObject } from '@toolz/is-a-regular-object';
```

### isARegularObject()

```javascript
const API = {
   arguments: {
      value: {
         required,
         format: any,
      },
   },
   returns: Boolean,
}
```

```javascript
isARegularObject({}); // true
isARegularObject({one: 'uno', two: 'dos'}); // true
isARegularObject({numbers: [1, 2, 3], letters: ['a', 'b', 'c']}); // true

isARegularObject(null); // false
isARegularObject([]); // false
isARegularObject([1, 2, 3]); // false
isARegularObject(''); // false
isARegularObject('object'); // false
isARegularObject(() => console.log('foo')); // false
```
