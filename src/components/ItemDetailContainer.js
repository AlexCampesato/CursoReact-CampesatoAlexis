
import {useEffect, useState} from 'react';
import {getItems} from '../api/api';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const {ItemId}=useParams();

    useEffect(()=>{

        getItems().then((items) =>{
            const item = items.find((i) => i.id === Number(ItemId));
            setItem(item);
        }).catch((error) =>{
            console.log(error);
        })
    }, [ItemId]);

return !item ? <div>cargando…</div> : <ItemDetail item={item}  />


}
