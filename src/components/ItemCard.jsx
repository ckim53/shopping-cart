import '../styles/styles.css'

function ItemCard({ id, title, image, handleChange }) {

    return (
        <div className="card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <button onClick={() => handleChange(id)}>Change Quantity</button>
        </div>
    );
}

export default ItemCard;