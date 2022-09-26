import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="destination-places-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationItem
