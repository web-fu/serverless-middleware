const fromHeader = (event, name, value = '') =>
  event.headers[name] ? event.headers[name] : value;

const localAuthorizer = async (event, _context) => {
  return {
    principalId: 'me',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: '*',
        },
      ],
    },
    context: {
      isAdmin: fromHeader(event, 'x-authorizer-is-admin', 1),
    },
  };
};

module.exports = {localAuthorizer};
