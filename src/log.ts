export const handler = async event => {
    console.log('OK');
    return {
        statusCode: 200 as const,
        contentType: 'application/json' as const,
        body: JSON.stringify(
            {
                message: 'I Log this call!',
                input: event,
            },
            null,
            2
        ),
    };
};
