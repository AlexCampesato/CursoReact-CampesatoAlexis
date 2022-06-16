const products = [
    {
        id: 1,
        title: 'Mesa ratona',
        description: 'Mesa estilo nordico',
        price: 30,
        pictureUrl: 'https://desillas.com/img/productos/size_1/block1.jpg'
    },
    {
        id: 2,
        title: 'Silla',
        description: 'silla escandinava',
        price: 22,
        pictureUrl: 'https://desillas.com/img/productos/size_1/TCRLFK_1.jpg'
    },

]

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(products);
    }, 2000);

});

function getItems(){
    return promesa;
}

export{
    getItems,
}