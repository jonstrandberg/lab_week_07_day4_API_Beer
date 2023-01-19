import Beer from "./Beer"

const BeerList = ({beers, onBeerClicked}) => {

    const arrayOfBeers = beers.map((beer) => {
        return <Beer beer={beer} beerName={beer.name} key={beer.id} onBeerClicked={onBeerClicked}/>
})

    return (
        <div>
            <ul>
            {arrayOfBeers}
            </ul>
        </div>
    )


}

export default BeerList