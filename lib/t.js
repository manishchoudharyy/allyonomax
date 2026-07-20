import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'lib/apps.json');
    
    const fileData = fs.readFileSync(filePath, 'utf8');
    let arr = JSON.parse(fileData);

    let bigName = arr[0].name;
    let bigNameCount = arr[0].name.length;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name.length > bigNameCount) {
            bigName = arr[i].name;
            bigNameCount = arr[i].name.length;
        }
    }
    console.log(bigName, bigNameCount)