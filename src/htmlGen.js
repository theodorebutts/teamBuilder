const Html = require('./html')
const fs = require('fs')

generateHtml = (team) => {
    let html = new Html()
    team.forEach(element => {
        html.body =
        `
        ${html.body}
        ${html.createEmployeeCard(element)}
        `
    })
    html.body =
    `
    ${html.body}
    ${html.foot}
    `

    fs.writeFile('./dist/myTeam.html', html.body, function (err) {
        if (err) {
            return console.log(err)
        } else {
            return console.log('======================')
            + console.log('Your team is ready to view')
            + console.log('Look in the "dist" folder and open "myTeam.html" in a browser')
            + console.log('======================')
        }
    })
}

module.exports = generateHtml