/* HELLO WORLD */

// console.log('HELLO WORLD');

/* BABY STEPS */

// let cmdLineArray = process.argv;
// let total = 0;

// for(let i = 2; i < cmdLineArray.length; i++) {
//     total+= Number(cmdLineArray[i]);
// };

// console.log(total);

/* MY FIRST I/O */

// const fs = require('fs');
// const content = fs.readFileSync(process.argv);

// const lines = content.toString().split('\n').length - 1;

// console.log(lines);

/* MY FIRST ASYNC I/O */

// const fs = require('fs');
// const file = process.argv[2];

// fs.readFile(file, function (err, contents) {
//     if(err) throw err;

//     const lines = contents.toString().split('\n').length - 1;
//     console.log(lines);
// });

/* FILTERED LS */

// const fs = require('fs');
// const path = require('path');

// const folder = process.argv[2];
// const extension = '.' + process.argv[3];

// fs.readdir(folder, function (err, files) {
//     if(err) throw err;

//     files.forEach(function (file) {
//         if (path.extname(file) === extension) {
//             console.log(file);
//         };
//     });
// });

/* MAKE IT MODULAR */

