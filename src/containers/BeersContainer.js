import { useState, useEffect } from "react"
import BeerList from "../components/BeerList"
import BeerDetail from "../components/BeerDetail"


const BeersContainer = () => {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])

    useEffect(() => {
        brewBeers()
    }, [])

    const brewBeers = function () {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(beers => setBeers(beers))
    }

    const onBeerClicked = function (beer) {
        setSelectedBeer(beer)
    }

    const addBeer = function (beer) {
        const copyOfFavBeers = [...favouritesList, beer]
        setFavouritesList(copyOfFavBeers)
    }



    return (
        <div className="main-container">
            <h2>All Beers</h2>
            <BeerList beers={beers} onBeerClicked={onBeerClicked} title="All beers"/>
            <h2>Favourite Beers</h2>
            <BeerList beers={favouritesList} onBeerClicked={onBeerClicked} title="favorite beers"/>
            {selectedBeer && <BeerDetail addBeer={addBeer}  beer={selectedBeer}/>}
            
        </div>
)}

export default BeersContainer