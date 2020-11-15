import * as fs from 'fs'
import getUser from '../app/src/data/GetUser'
// const jsonPath = '../app/src/data/member.json'
const jsonPath = '../app/src/data/member.json'

fs.readFile(jsonPath, (err, data) => {
    let parseData = JSON.parse(JSON.stringify(data))
    console.log(parseData)
    fs.writeFile(jsonPath, data, (err) => {
        for (let i: number = 0; i < parseData.length; i++) {
            getUser(parseData[i].name).then(d => console.log(d))
        }
    })
})