import './index.css'

const ContentItem = props => {
  const {itemDetails, activeButtonId, onClickChangeLanguageMethod} = props
  const {buttonText, id} = itemDetails
  // console.log(buttonText, id, imageAltText, imageUrl)
  // console.log(activeButtonId)
  // console.log(id)

  const buttonClassName =
    activeButtonId === id ? 'custom-button active' : 'custom-button un-active'
  // console.log(buttonClassName)

  const onClickButton = () => {
    onClickChangeLanguageMethod(id)
  }

  return (
    <li>
      <button className={buttonClassName} type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default ContentItem
