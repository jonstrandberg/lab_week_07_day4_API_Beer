
const Beer = ({beer, beerName, onBeerClicked}) => {

    const handleClick = function () {
        onBeerClicked(beer)
    }


    return (
        <div>
            <li onClick={handleClick}>
                {beerName}
            </li>
        </div>
    )
}

export default Beer