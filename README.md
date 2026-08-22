[![Run regression tests of feature branches](https://github.com/aljmnz59/playwright-ui-tests/actions/workflows/run-regression-tests.yml/badge.svg)](https://github.com/aljmnz59/playwright-ui-tests/actions/workflows/run-regression-tests.yml)
 
 # Saucedemo E2E Testing with Playwright

Saucedemo is an e-commerece website that was developed for software tester/QA to practice manual testing, web automation and end-to-end testing. This repository containcs end-to-end tests written in Playwright with TypeScripts for the Saucedemo website

### Prerequisites
Before running the tests, make sure you have the following:

1. Node.js and NPM installed.
2. Saucedemo is running.
3. Playwright installed.

### Installation

1. Clone the repository to your local machine.
2. Install the dependencies:
```bash
npm install
```
and
```bash
npx playwright install --with deps
```
### Running the Tests
1. To run all tests:
```bash
npm run test:e2e
```



