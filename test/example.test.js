// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract , divide, multiply } from '../utilities.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const sum = 7;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('time to test a subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 78;
    const y = 2;
    const sum = 76;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('time to test a multiply function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 4;
    const sum = 16;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply (x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('time to test a divide function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 16;
    const y = 4;
    const sum = 4;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});