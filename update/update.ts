const fs = require('fs')
import getUser from '../app/src/data/GetUser.ts'
// const jsonPath = '../app/src/data/member.json'
const jsonPath = '../app/src/data/member.json'

fs.readFile(jsonPath, (err, data) => {
    fs.writeFile(jsonPath, data, (err) => {
        data = JSON.parse(data)
        console.log(data)
    })
})
