const { BreakingChangesRuleset, NamingChangesRuleset } = require('@useoptic/standard-rulesets');

module.exports = {
  checks: [
    { name: 'optic-breaking-changes' }
  ],
  // rules: [
  //   new BreakingChangesRuleset(),
  //   new NamingChangesRuleset({
  //                              applies: 'always', // also available: 'added' | 'addedOrChanged'
  //                              options: { // valid formats are: 'camelCase' | 'Capital-Param-Case' | 'param-case' | 'PascalCase' | 'snake_case'
  //                                properties: 'camelCase',
  //                                queryParameters: 'camelCase',
  //                                requestHeaders: 'camelCase',
  //                                responseHeaders: 'camelCase',
  //                              }
  //                            })
  // ],
}