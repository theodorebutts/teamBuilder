class Html {
    constructor() {
        //Start of HTML Generation
        this.body =
            `<!DOCTYPE html>
<html>
        
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>My Team</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">   
    </head>
        
    <body>
        <div class="text-white bg-primary pt-4 pb-4">
            <div class="text-center">
                <h1 class="">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row pt-5">
            ` 
                this.foot =
            `    
            </div>
        </div>
        <footer>
            <div class="footer-copyright text-center py-3">Webpage created by
                <a href="https://github.com/theodorebutts/teamBuilder">Team Builder</a>
            </div>
        </footer>
        <script src="https://use.fontawesome.com/e7f97d5a90.js"></script>
    </body>
</html>
`
    }
    //creates employee cards based on input
    createEmployeeCard = function (element) {
        let html = `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card mb-5">
                <div class="card-header text-white bg-primary mb-3">
                    <h2>${element.name}</h2>
                    <h4>${element.role}<span class="pl-2">${element.roleIcon}</span></h4>
                </div>
                <div class="card-body font-weight-bold">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                        ID: ${element.id}
                        </li>
                        <li class="list-group-item">
                        Email: <a href="mailto:${element.email}">${element.email}</a>
                        </li>
                        <li class="list-group-item">${element.roleInfoType}: 
                            ${element.roleInfo}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `
        return html
    }

}

module.exports = Html