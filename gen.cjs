const fs = require('fs')
const path = require('path')
const arr = []
for (let i = 0; i < 24; i++) {
    if (i < 10) arr.push(`0${i}`)
    if (i > 9) arr.push(String(i))
  }
  
  fs.writeFileSync(path.join(__dirname, 'seconds.json'), JSON.stringify(arr))


