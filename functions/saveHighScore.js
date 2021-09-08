require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.AIRTABLE_BASE)
const table = base.table(process.env.AIRTABLE_TABLE);

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


        const records = await table.select({
            sort:[{field: 'score', direction: 'desc'}]
            }).firstPage();
        const formattedRecords = records.map(record => ({
            id: record.id,
            fields: record.fields
        }))

        //the lowest record is at index 9 from the above sort.
        const lowestScore = formattedRecords[9].fields.score ? formattedRecords[9].fields.score: 0;
        if (score > lowestScore) {
            const updatedRecord = {
                id: formattedRecords[9].id,
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