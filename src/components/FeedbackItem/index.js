const FeedbackItem = props => {
  const {information, onChanging} = props
  const {name, imageUrl} = information

  const Changing = () => {
    onChanging()
  }
  return (
    <li>
      <img src={imageUrl} alt={name} onClick={Changing} />
      <p>{name}</p>
    </li>
  )
}

export default FeedbackItem
