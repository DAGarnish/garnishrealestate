const fs = require('fs');

const sql = fs.readFileSync('scratch/backup.sql', 'utf8');
const lines = sql.split('\n');
const insertPostsLines = lines.filter(l => l.startsWith('INSERT INTO `wp_posts` VALUES'));

if (insertPostsLines.length > 0) {
  const line = insertPostsLines[0];
  // naive split: assuming `),(v,v...)` structure
  const entries = line.substring(line.indexOf('VALUES ') + 7).split('),(');
  console.log("Total post entries:", entries.length);
  
  let pages = 0;
  let properties = 0;
  const urls = [];
  
  entries.forEach(entry => {
    if (entry.includes("'page'")) {
      pages++;
      urls.push(entry.split(',').slice(0, 5).join(','));
    }
    if (entry.includes("'cf47rs_property'")) properties++;
  });
  
  console.log("Pages:", pages);
  console.log("Properties:", properties);
  console.log("Sample Pages:", urls.slice(0, 3));
}
