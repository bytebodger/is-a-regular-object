import { isARegularObject } from './is.a.regular.object';

const aFalse = false;
const aFalseString = 'false';
const aFunction = () => 'foo';
const anAlphabetString = 'abcdefghijklmnopqrstuvwxzy';
const anArrayOfArrays = [[9, 8, 7], ['foo', 'fie', 'fee'], [{one: 1}, {two: 2}], []];
const anArrayOfIntegers = [2, 9, 42, 187];
const anArrayOfMixedTypes = ['string', {}, 42, 3.14, ['fee', 'fie', {}], {uno: 'one', dos: 'two'}];
const anArrayOfNumbers = [-3, 3.14, 42, 99.99];
const anArrayOfObjects = [{one: 1, two: 2}, {three: 3, four: 4}, {five: 5, six: 6}, {}];
const anArrayOfPeople = [{first: 'joe', last: 'smith', middle: 'bob'}, {first: 'mary', last: 'smits', middle: 'jane'}, {first: 'rik', last: 'tik', middle: 'tok'}];
const anArrayOfStrings = ['one', 'two', 'three'];
const aNegative1 = -1;
const aNegativePi = -3.14;
const anEmptyArray = [];
const anEmptyObject = {};
const anEmptyString = '';
const aNull = null;
const aNumber0 = 0;
const aNumber1 = 1;
const aNumber1WithDecimals = 1.00;
const anUndefined = undefined;
const aPi = 3.14;
const aPopulatedObject = {all: 'for', one: 'and', none: 'for', paul: ''};
const aTrue = true;
const aTrueString = 'true';

test('isARegularObject() should return TRUE for any plain JavaScript object', () => {
   expect(isARegularObject(anEmptyObject)).toEqual(true);
   expect(isARegularObject(aPopulatedObject)).toEqual(true);
});

test('isARegularObject() should return FALSE for anything besides a plain JavaScript object', () => {
   expect(isARegularObject(aFalse)).toEqual(false);
   expect(isARegularObject(aFalseString)).toEqual(false);
   expect(isARegularObject(aFunction)).toEqual(false);
   expect(isARegularObject(anAlphabetString)).toEqual(false);
   expect(isARegularObject(anArrayOfArrays)).toEqual(false);
   expect(isARegularObject(anArrayOfIntegers)).toEqual(false);
   expect(isARegularObject(aFalseString)).toEqual(false);
   expect(isARegularObject(anArrayOfMixedTypes)).toEqual(false);
   expect(isARegularObject(anArrayOfNumbers)).toEqual(false);
   expect(isARegularObject(anArrayOfObjects)).toEqual(false);
   expect(isARegularObject(anArrayOfPeople)).toEqual(false);
   expect(isARegularObject(anArrayOfStrings)).toEqual(false);
   expect(isARegularObject(aNegative1)).toEqual(false);
   expect(isARegularObject(aNegativePi)).toEqual(false);
   expect(isARegularObject(anEmptyArray)).toEqual(false);
   expect(isARegularObject(anEmptyString)).toEqual(false);
   expect(isARegularObject(aNull)).toEqual(false);
   expect(isARegularObject(aNumber0)).toEqual(false);
   expect(isARegularObject(aNumber1)).toEqual(false);
   expect(isARegularObject(aNumber1WithDecimals)).toEqual(false);
   expect(isARegularObject(anUndefined)).toEqual(false);
   expect(isARegularObject(aPi)).toEqual(false);
   expect(isARegularObject(aTrue)).toEqual(false);
   expect(isARegularObject(aTrueString)).toEqual(false);
});
