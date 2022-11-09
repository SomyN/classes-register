let dataRender = document.querySelector('#data-render');
function generateUser(){
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) =>{
        console.log(dataRender);
        dataRender.innerHTML = `<div> 
        <h1 class ="name-text">
        ${data?.results[0]?.name?.title}
        ${data?.results[0]?.name?.first}
        ${data?.results[0]?.name?.last}
        </h1>
        <p class="para-text"> ${data?.results[0].gender} </p>
        <p class="para-text"> ${data?.results[0].email} </p>
        <p class="para-text"> ${data?.results[0].phone} </p>
        <p class="para-text"> ${data?.results[0]?.location?.state} </p>
        <p class="para-text"> ${data?.results[0]?.location?.country} </p>
         
        <img class="image" src = ${data?.results[0].picture?.large}
        </div>`
    console.log(data)})
}

