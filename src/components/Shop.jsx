//have cards representing items
//from items from api 
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import '../styles/styles.css';
import Loading from "./Loading";

const Shop = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    function handleQuantityChange(itemId) {
        const updatedItem = items.find(item => item.id === itemId);
        setItems(items.map(item => item.id === itemId ? updatedItem : item));
    }
    
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setItems(
                    data.map(item => ({
                        title: item.title,
                        id: item.id,
                        image: item.image
                    }))
                );
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    if (loading) {
        return <Loading/>;
      }

    return (<div>
            <div className="shop-title">
                <h1>Shop</h1>
            </div>
            <div className="card-grid">
                    {
                    items.map(item => 
                    <ItemCard 
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        image={item.image}
                        handleChange={() => handleQuantityChange(item.id)}>
                    </ItemCard>)
                }
                </div>
        </div>
    )
}

export default Shop;