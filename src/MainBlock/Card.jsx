function Card({ name, village, ability, image }) {
    return (
        <div
            className="card"
            onClick={() => console.log(name, village, ability, image)}
        >

            <img src={image} alt={name} />

            <h3>{name}</h3>

            <p>{village}</p>

            <p>{ability}</p>

            <button>SELECT</button>

        </div>
    );
}

export default Card;