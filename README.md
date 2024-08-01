# Automation_On_Ultralession_Using_Playwright

## Description
   - Javascript is used as the programming language.
   - Playwright library for UI automation.


## Installation

1. Download and install NodeJs(https://nodejs.org/en/download/)
2. Install VS Code
3. Download/Clone the repo to your system.
4. Open the repo in VS code and open terminal
5. run `npm run install-dependency` -- this will install the dependencies and `node_modules` folder will be created


## Getting started with UI Automation

1. Approach to automate UI tests
    - We are using POM(Page object model) approach
    - Create Pages classes for respective features under Pages
    - Finally create a tests file that will have the test cases.
2. Folder structure as below:
    - We need to work on `root` folder:
        1. `PageObject` folder - Declare all the pages classes related to feature.
        2. `tests` folder - Test cases divided differnet pages        


## Running Test Cases

1. Approach to execute only `Visual Test` test cases:
    - Command to execute the test case locally `npm run visual-test`
2. Approach to execute only `E2E Test` test cases:
    - Command to execute the test case locally `npm run e2e-test`
3. Approach to execute only `feature-test` test cases:
    - Command to execute the test case locally `npm run feature-test`
4. Approach to execute only productSearchPage test cases:
    - Command to execute the test case locally `npm run test-productSearchPage`
5. Approach to execute all the test cases:
    - Command to execute all the test case locally `npm run test-all`



