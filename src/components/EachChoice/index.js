import {EachChoiceEle, EachChoiceBtn, EachImgEle} from './styledComponets'

const EachChoice = props => {
  const {eachChoice, userSelection} = props
  const {imageUrl, id} = eachChoice

  const onClickSelect = () => {
    userSelection(eachChoice)
  }

  return (
    <EachChoiceEle>
      <EachChoiceBtn
        type="button"
        onClick={onClickSelect}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <EachImgEle src={imageUrl} alt={id} />
      </EachChoiceBtn>
    </EachChoiceEle>
  )
}

export default EachChoice
