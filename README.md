[![Run regression tests of feature branches](https://github.com/aljmnz59/playwright-ui-tests/actions/workflows/run-regression-tests.yml/badge.svg)](https://github.com/aljmnz59/playwright-ui-tests/actions/workflows/run-regression-tests.yml)
 
 # Saucedemo E2E Testing with Playwright

Saucedemo is an e-commerece website that was developed for software tester/QA  to practice manual testing, web automation and end-to-end testing.

## Getting Started

* Follow these steps to setup the web test environment on your local machine.

### Prerequisites

1. **Install Node.js and NPM**
    Go to https://nodejs.org/en/download and download the latest version of Node.js. Next to install npm (Node Package Manager) type:
    ```bash
    npm install -g npm
    ```

    then type:

    ```bash
    node -v 
    ```

    and 

    ```bash
    npm -v 
    ```

    To confirm the node and npm versions.

2. **Install Git**
    Go to https://git-scm.com/install/ , select your operating system and download the Git.

    After downloading type:

    ```bash
    git -v
    ```
3. **Install Playwright**
    To install playwright, just type:

    ```bash
    npm init playwright@latest
    ```

    * Choose between TypeScript or JavaScript.
    * Name your end-to-end tests folder (default is tests).
    * Add a GitHub Actions workflow if needed.
    * Install Playwright browsers (recommended).


