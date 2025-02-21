const fs = require('fs');
const path = require('path');
const glob = require('glob');

const mdDir = path.join(__dirname, '../public/md');
const outputFile = path.join(__dirname, '../src/assets/mdFiles.json');

// 扫描public/md目录下的所有.md文件
const files = glob.sync('**/*.md', { cwd: mdDir });

// 生成相对路径（相对于public目录）
const fileList = files.map(file => `/md/${file}`);

// 写入JSON文件 
fs.writeFileSync(outputFile, JSON.stringify(fileList, null, 2));

console.log('Generated mdFiles.json:', fileList);
