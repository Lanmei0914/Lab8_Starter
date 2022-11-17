// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test isPhoneNumber()
test('Test isPhoneNumber() true 1: isPhoneNumber((626)-492-9394)', () => {
    expect(functions.isPhoneNumber('(626)-492-9394')).toBe(true);
  });

test('Test isPhoneNumber() true 2: isPhoneNumber((123)-456-7890)', () => {
expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('Test isPhoneNumber() false 1: isPhoneNumber(1234567890)', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
  });

test('Test isPhoneNumber() false 2: isPhoneNumber(000)', () => {
expect(functions.isPhoneNumber('000')).toBe(false);
});

//test isEmail()
test('Test isEmail() true 1: isEmail(c4yan@ucsd.edu)', () => {
    expect(functions.isEmail('c4yan@ucsd.edu')).toBe(true);
  });

test('Test isEmail() true 2: isEmail(12345@gmail.com)', () => {
    expect(functions.isEmail('12345@gmail.com')).toBe(true);
});

test('Test isEmail() false 1: isEmail(@gmail.com)', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('Test isEmail() false 2: isEmail(notAEmail.gmail.com)', () => {
    expect(functions.isEmail('notAEmail.gmail.com')).toBe(false);
});

//test isStrongPassword()
test('Test isStrongPassword() true 1: isStrongPassword(felixIsTired)', () => {
    expect(functions.isStrongPassword('felixIsTired')).toBe(true);
});

test('Test isStrongPassword() true 2: isStrongPassword(helloWorld)', () => {
    expect(functions.isStrongPassword('helloWorld')).toBe(true);
});

test('Test isStrongPassword() false 1: isStrongPassword(123)', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('Test isStrongPassword() false 2: isStrongPassword(abcdefghijklmnopqrstuvwxyz)', () => {
    expect(functions.isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});


//test isDate()
test('Test isDate() true 1: isDate(11/16/2022)', () => {
    expect(functions.isDate('11/16/2022')).toBe(true);
});

test('Test isDate() true 2: isDate(09/14/2018)', () => {
    expect(functions.isDate('09/14/2018')).toBe(true);
});

test('Test isDate() false 1: isDate(123/456/789)', () => {
    expect(functions.isDate('123/456/789')).toBe(false);
});

test('Test isDate() false 2: isDate(11162022)', () => {
    expect(functions.isDate('11162022')).toBe(false);
});

//test isHexColor()
test('Test isHexColor() true 1: isHexColor(#FFFFFF)', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Test isHexColor() true 2: isHexColor(123)', () => {
    expect(functions.isHexColor('123')).toBe(true);
});

test('Test isHexColor() false 1: isHexColor(#ABCDEFGHI)', () => {
    expect(functions.isHexColor('#ABCDEFGHI')).toBe(false);
});

test('Test isHexColor() false 2: isHexColor(000#111)', () => {
    expect(functions.isHexColor('000#111')).toBe(false);
});