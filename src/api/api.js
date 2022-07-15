import {getDocs, collection} from 'firebase/firestore';
import {db} from '../components/firebase';

const promesa = new Promise(function(resolve, reject){

    const itemCollection = collection(db,"producto")

        getDocs(itemCollection)
        .then(snapshot=>{
            const products = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            resolve(products)
            console.log(products)
        })
        .catch(error=>{
            console.log(error)
        })

});

function getItems(){
    return promesa;
}

export{
    getItems,
}