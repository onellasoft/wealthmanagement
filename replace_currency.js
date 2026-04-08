const fs = require('fs');
const walk = function(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            results.push(file);
        }
    });
    return results;
}
const files = walk('src/app');
files.forEach(f => {
    if(f.endsWith('.ts') || f.endsWith('.html')) {
        let content = fs.readFileSync(f, 'utf8');
        // Match $ followed by digits/commas/decimals and optional k/m/b
        let newContent = content.replace(/\$([\d\,\.]+([KkMmBb]+)?)/g, '₹$1');
        // Check for specific hardcoded examples
        newContent = newContent.replace(/\$50k/ig, '₹50k');
        newContent = newContent.replace(/\$5m/ig, '₹5m');
        if(content !== newContent) {
            fs.writeFileSync(f, newContent);
            console.log("Updated: " + f);
        }
    }
});
