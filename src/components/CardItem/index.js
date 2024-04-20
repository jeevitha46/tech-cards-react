// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardListItem} = props
  const {title, description, imgUrl, className} = cardListItem

  return (
    <li className={`${className} cards`}>
      <h1 className="header">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
