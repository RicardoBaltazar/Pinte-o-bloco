let openModal = document.querySelector('form')
let closeModal = document.querySelector('#btnModalClose')
let modal = document.querySelector('.modal')


let name = document.querySelector('input[name=name]')
let address = document.querySelector('input[name=address]')
let address2 = document.querySelector('input[name=address2]')
let state = document.querySelector('select[name=uf]')
let city = document.querySelector('#city')


//let collectedItems = document.querySelector('input[name=items]')
//let selectedItems = []

const ItemsToCollect = document.querySelectorAll('.grid-items li')

for(let item of ItemsToCollect){
    item.addEventListener('click', handleSelectedItem)
}



let collectedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem(){
    const itemLi = event.target
    //adcionar ou remover uma clase
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.id

    
    //verificar se existem itens selecionados. se sim
    //pegar os itens selecionados

    let alreadySelected = selectedItems.findIndex( function(item){
        let itemsFound = item == itemId
        return itemsFound
})


    //se já estiver seleiconado, tirar da seleção

    if(alreadySelected >= 0){
        let filteredItems = selectedItems.filter( function(item){
            let itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else{
        //se não estiver selecionado, adicionar a seleção
        //adicionar a seleção
        selectedItems.push(itemId)

    }

    //atializar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems



    console.log(selectedItems.value)


}


/////////
openModal.addEventListener('submit', function(event){
    event.preventDefault()
    

    let body = {
        //"id": 3,
        "ponto": name.value,
        "address": address.value,
        "address2": address2.value,
        "state": state.value,
        "city": city.value,
        'items' : selectedItems
    }

    fetch('http://localhost:8000/produtos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'    },
    body: JSON.stringify(body),
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log('Success: ', JSON.stringify(response))
    })
    .catch(error => console.error('Error:', error))

    modal.classList.remove('hide')
    
})


closeModal.addEventListener('click', function(){
    modal.classList.add('hide')
    
    document.querySelector('input[name=name]').value = '' 
    document.querySelector('input[name=address]').value = '' 
    document.querySelector('input[name=address2]').value = '' 
})
