export const handler = async event => {
    console.log('OK');
    return {
        statusCode: 200 as const,
        contentType: 'application/json' as const,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };
};
