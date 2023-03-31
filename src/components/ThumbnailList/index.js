const ThumbnailList = props => {
  const {eachItem1, passingFunction} = props
  const {id, thumbnailUrl} = eachItem1
  const matchFunction = () => {
    console.log('image')
    passingFunction(id)
  }

  return (
    <li>
      <button type="button" onClick={matchFunction}>
        <img src={thumbnailUrl} alt=" thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailList
