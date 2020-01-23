const pa11y = require('pa11y');
const baseUrls = require('./baseUrls');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
let records = [];

crawl()



async function crawl(){
    base = baseUrls.baseUrls()
    for(category in base){
        for(data in base[category]){
            await checkAccessibility(baseUrls.baseUrls()[category][data]);
        }
    }
    writeCsv()
}


async function checkAccessibility(urlData) {
    const result = await pa11y( urlData.url, {
        actions: urlData.actions,
        log: {
            debug: console.log,
            error: console.error,
            info: console.log
        },
        timeout: 50000
        
    })
        
        
        result.issues.forEach(issue => {
            records.push({title: result.documentTitle,  url: result.pageUrl, context: issue.context, message: issue.message, type: issue.type},)
        });
        

}


function writeCsv(){
        const csvWriter = createCsvWriter({
            path: './result.csv',
            header: [
                {id: 'title', title: 'title'},
                {id: 'url', title: 'url'},
                {id: 'context', title: 'context'},
                {id: 'message', title: 'message'},
                {id: 'type', title: 'type'},
            ]
        });
    csvWriter.writeRecords(records)     
}

