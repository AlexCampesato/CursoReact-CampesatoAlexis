import './ItemList.css';
import {Link} from 'react-router-dom';

export default function Item({item}) {
    return(
        <div className="item-container">
            <Link to={`/producto/${item.id}`}>
                <img className='item-picture' src={item.pictureUrl} alt="Imagen del producto"/>
            </Link>
            <div className="detail-container">
                <p className="item-title">{item.title}</p>
                <p className="item-price">$ {item.price}</p>
            </div>
            
        </div>
    )
}