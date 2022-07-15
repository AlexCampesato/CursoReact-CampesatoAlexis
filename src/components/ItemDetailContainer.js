
import {useEffect, useState} from 'react';
import {getItems} from '../api/api';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore';
import {db} from "./firebase"



export default function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const {ItemId}=useParams();

    useEffect(()=>{

        const itemRef = doc(db, "producto", ItemId);
        getDoc(itemRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                setItem({id:snapshot.id, ...snapshot.data()})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }, [ItemId]);

return !item ? <div>cargando…</div> : <ItemDetail item={item}  />


}
