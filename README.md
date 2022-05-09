# Counter App

A program that will calculate the last two digits of the given _N_ number

## Installation & Run project

- Clone this project
- Run _npm install_ in the project directory
- Then run _npm start_ to start the project
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**_Application Requirement_**

known a sequence of numbers as follows

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

The value of these numbers is obtained by the addition of the previous two numbers. Like for example:

- The number _2_ is obtained from the addition operation of the previous two numbers _(1 + 1)_.
- The number 3 comes from the addition of a number (1 + 2)
- the number 5 comes from the addition of a number (2 + 3)
- And so on.

**_The Test_**

Create a program where the user can input the value of _N_ and then the program will display the results of the sequence of numbers as above dynamically until the loop of _N_

**_Conditions_**

- Filter out the additive inverse number (e.g -0, +0)
- Only numbers are allowed to be inputed
- The results displayed in the table should always begin with the number _0_
- To retain data, save the results in a Local Storage web browser
- Each time a new number is calculated/processed, the old data stored in Local Storage must be removed

**_Result_**

![COUNTER-APP!] (public\app-result.png)
