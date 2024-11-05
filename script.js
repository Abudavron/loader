const Loader = document.querySelector('.loader')
const Text = document.querySelector('h1')



Loader.style.display = 'none'

const getNumbersData = () => {
    let number = Math.floor(Math.random()*10)
    Loader.style.display = 'block'

    fetch(`http://numbersapi.com/${number}`)
        .then(response=>response.text())
        .then(data=>{
           if(data){
            Text.innerHTML = data;
            Loader.style.display = 'none'
           }
        })
}    