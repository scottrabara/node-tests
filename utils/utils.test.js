const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    //Using expect library
    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

// For async functions, must pass done argument in it()'s callback
// Call done when async operation is finished
it('should add two numbers asynchronously', (done) => {
    utils.asyncAdd(33, 11, (sum) => {
        expect(sum).toBe(44).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(11);

    //Using expect library
    expect(res).toBe(121).toBeA('number');
    // if (res !== 121) {
    //     throw new Error(`Expected 121, but got ${res}`);
    // }
});

// For async functions, must pass done argument in it()'s callback
// Call done when async operation is finished
it('should square a number asynchronously', (done) => {
    utils.asyncSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
    });
});

// it('should expect some value', () => {
//     expect(12).toNotBe(11);
//     //Must use toEqual when comparing objects and arrays
//     expect({name:  'Scott'}).toEqual({name: 'Scott'});
//     expect([2,3,4]).toInclude(2);
//     expect({
//         name: 'Scott',
//         age: 26,
//         location: 'California'
//     }).toInclude({
//         age: 26
//     })
// });

it('should verify first and last names are set', () => {
    var user = {
        age: 26,
        location: 'California'
    };

    var res = utils.setName(user, 'Scott Rabara');

    expect(res).toInclude({
        firstName: 'Scott',
        lastName: 'Rabara'
    });
});