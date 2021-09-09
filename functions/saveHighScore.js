const { table, getHighScores } = require('./utils/airTable');

exports.handler  = async(event) => {
    try {
        if (event.httpMethod !== "POST") {
            
            return {
                statusCode: 405,
                body: JSON.stringify({err: `that method ${event.httpMethod} is not allowed`})
            }
        }

        const {score, name} = JSON.parse(event.body);
        
        if (!score || !name) {
            return {
                statusCode: 400,
                body: JSON.stringify({err: `bad request missing name or score`})
            }
        }


        const scores = await getHighScores(false);

        //the lowest record is at index 9 from the above sort.
        const lowestScore = scores[9].fields.score ? scores[9].fields.score: 0;
        if (score > lowestScore) {
            const updatedRecord = {
                id: scores[9].id,
                fields: {name, score}
            }
            await table.update([updatedRecord]);
            return {
                statusCode: 200,
                body: JSON.stringify(updatedRecord)
            }
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({msg: 'Score was not in the top 10'})
            }
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({err: 'Error saving score to AirTable, check the log'})
        }
    }
}