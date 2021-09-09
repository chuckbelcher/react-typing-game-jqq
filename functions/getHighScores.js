const {  getHighScores } = require('./utils/airTable');

exports.handler  = async(event) => {
    try {

        const scores = await getHighScores(true);

        return {
            statusCode: 200,
            body: JSON.stringify(scores)
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({err: 'Error pulling scores from table, check the log'})
        }
    }
}