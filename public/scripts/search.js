let points = document.querySelector('.points')


function getData(){
    fetch('http://localhost:8000/produtos')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        //console.log(data[0].ponto)
    let arrayData = data
        
        arrayData.forEach(function(element){
            console.log(element)
            
                 points.innerHTML += "<li>" + "<span class='spanLiPoint'>" + element.ponto  +"</span>"+ "<br>" 
                + 'endereço : ' + element.address + "<br>"  
                + 'número: ' + element.address2 + "<br>" 
                + 'estado: ' + element.state + "<br>" 
                + 'cidade: ' + element.city + "<br>"  
                + 'itens: ' + element.items + "<br>"       
                 "</li>"

        })

        /*
     points.innerHTML += "<li>" + "<span class='spanLiPoint'>" + data[0].ponto  +"</span>"+ "<br>" 
    + 'rua : ' + data[0].address + "<br>" 
    + 'número: ' + data[0].address2 + "<br>" 
    + 'estado: ' + data[0].state + "<br>" 
    + 'cidade: ' + data[0].city + "<br>"  
    + 'itens: ' + data[0].items + "<br>"       
     "</li>"
        */
        
    })
}

getData()


