/*
 * Objectives:
 * + Mock out Payee DAO, removing and replacing it as a dependency
 * + Write tests which use the mocked DAO
 * + Specifically, test the onInit function
 *
 * Start by writing a beforeEach function which mocks out payee-dao.provider.js
 * In particular, you will need to mock out both the query and get methods,
 * as each is used in payee-main.component.js
 *
 * Then inject any necessary dependencies such as $componentController.
 * Finally, mock out any other data you might need for the tests below.
 *
 * Write the following tests:
 * + Make sure that the payeeMain component can load successfully
 * + Check that onInit loads a set of payees if it does not have a set of payees
 *   (e.g., for payeeList)
 * + Check that onInit loads a payee if it does not have a payee (e.g., for
 *   payeeDetail)
 *
 * To run your tests, go to your command prompt. Make sure you are in the
 * banking/app/payee/test/karma directory. Run karma, using payee-main.karma-conf.js.
 *
 *
 */