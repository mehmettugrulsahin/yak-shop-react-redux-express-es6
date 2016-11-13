module.exports = ({ serverConfig }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const sampleHerd = {
            'day': req.params.day,
            'data': {
                'herd': [
                    {
                        'name': 'Betty-1',
                        'age': '4',
                        'sex': 'f'
                    },
                    {
                        'name': 'Betty-2',
                        'age': '8',
                        'sex': 'f'
                    },
                    {
                        'name': 'Betty-3',
                        'age': '9.5',
                        'sex': 'f'
                    }
                ]
            }
        };

        res.status(httpResponses.ok).json(sampleHerd);
    };
};