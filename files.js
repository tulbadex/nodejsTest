const fs = require('fs');
// reading files
/* fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
});
console.log('last line'); */


// writing files
/* fs.writeFile('./docs/blog.txt', 'hello world', () => {
    console.log('file was written');
}); */


// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    
        console.log('Folder created');
    });
} else {
    fs.rmdir('./assests', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}


// deleting files
/* if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        console.log(err);
    });
    console.log('file deleted');
} */