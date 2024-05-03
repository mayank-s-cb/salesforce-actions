const core = require('@actions/core');
const fs = require('fs').promises; // Use fs.promises for async file operations

async function readXmlFile(filePath) {
    try {
        // Read the XML file asynchronously
        profileXmlFile = await fs.readFile(filePath, 'utf8');
        return profileXmlFile;
    } catch (error) {
        console.error('Error reading XML file:', error);
        throw error;
    }
}

async function main(firstJsValue , filePath){
    readXmlFile(filePath)
    .then( data => {
        var newData = data.toString()+firstJsValue;
        console.log(newData);
        core.setOutput('newFile',newData);
        fs.writeFile(filePath, newData);
    })
}

  
  // Retrieve the string value passed from the GitHub Action
  const stringValue = ' New Data';
  
  main(stringValue, './newDay.txt')
