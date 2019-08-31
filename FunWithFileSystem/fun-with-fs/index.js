const fs = require('fs');
var directory = __dirname + '\\files';


//Part 1 for windows base directories
//logSizes(directory);
//
//function logSizes(directory) {
//    fs.readdir(directory, {
//        withFileTypes: true
//    }, (err, files) => {
//        if (err) {
//            console.log('Error in readdir: ', err);
//        }
//        for (let i = 0; i < files.length; i++) {
//            if (files[i].isDirectory()) {
//                logSizes(`${directory}\\${files[i].name}`);
//            } else {
//                let path = `${directory}\\${files[i].name}`;
//                fs.stat(path, (err, stat) => {
//                    if (err) {
//                        console.log("err in 'size' function: ", err);
//                    }
//                    console.log(path, stat.size);
//                });
//            }
//        }
//    });
//}

//part 2 for windows base directories
const files = mapSizes(directory);

function mapSizes(directory) {

    const map = fs.readdirSync(directory, {
        withFileTypes: true
    });
    let content = {};
    for (let i = 0; i < map.length; i++) {
        let name = map[i].name;
        let path = `${directory}\\${map[i].name}`;
        const stat = fs.statSync(path);
        if (map[i].isFile()) {
            content[name] = stat.size;
        } else {
            content[name] = mapSizes(path);
        }
    }

    //    console.log(content);
    return content;
}

//Part 3 
console.log(files);
fs.writeFileSync(`${__dirname}/files.json`, JSON.stringify(files, null, 4));
