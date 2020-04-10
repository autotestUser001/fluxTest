Test exercise:

- Return how many named brands of used cars are available in the TradeMe Used Cars category.
- Check that the brand ‘Kia’ exists and return the current number of Kia cars listed.
- Check that the brand ‘Hispano Suiza’ does not exist.

**Introduction:**

The tests are written using Cypress JavaScript and runs in a NodeJS environment. Cypress supports 	front end and API test automation. More documentation about Cypress can be found in https://docs.cypress.io/.

**Instructions for running the test:**

1. Download and install NodeJS into your operating system, using this link: https://nodejs.org/

2. Install cypress using the instruction from Cypress - https://docs.cypress.io/guides/getting-started/installing-cypress.html

3. The URL for browsing the code on GitHUB is https://github.com/autotestUser001/fluxTest

   Ensure you have git installed and run the following command to check out the code.

   *git clone https://github.com/autotestUser001/fluxTest.git*

   *cd fluxTest*

4. The URLThe tests can be run from Cypress Test Runner or command line.

   To run the test from Cypress Test Runner, type the following command:

   *npx cypress open* 

   then run the trademe_usedcars_spec script in the integration folder.

   To run the test from command line, maximize the command prompt , then type the following command:

   *npx cypress run cypress/integration/trademe_usedcars_spec.js*

