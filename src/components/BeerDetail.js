import './BeerDetail.css'

const BeerDetail = ({beer, addBeer}) => {
    
    const handleClick = () => {
        const favouriteBeer = beer
        console.log(favouriteBeer)
        addBeer(favouriteBeer)
    }

    
    return (
        <div className="beer-detail">
            <p>Beer: {beer.name}</p>
            <p>Description: {beer.description}</p>
            <p>ABV: {beer.abv}</p>
            <img className="image" src={beer.image_url}/>
            <button onClick={handleClick} value={beer}>Add favourite</button>
        </div>
    )
}

export default BeerDetail