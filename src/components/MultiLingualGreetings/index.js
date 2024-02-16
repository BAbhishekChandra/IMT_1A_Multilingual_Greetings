import {Component} from 'react'
import ContentItem from '../ContentItem'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
// console.log(languageGreetingsList)

class MultiLingualGreetings extends Component {
  state = {initialItem: languageGreetingsList[0]}

  onClickChangeLanguageMethod = id => {
    this.setState({
      initialItem: languageGreetingsList.find(eachItem => eachItem.id === id),
    })
  }

  render() {
    const {initialItem} = this.state
    // console.log(initialItem)

    return (
      <div className="main-container">
        <h1 className="page-title">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(eachItem => (
            <ContentItem
              itemDetails={eachItem}
              activeButtonId={initialItem.id}
              key={eachItem.id}
              onClickChangeLanguageMethod={this.onClickChangeLanguageMethod}
            />
          ))}
        </ul>
        <div className="image-container">
          <img
            className="img-element"
            src={initialItem.imageUrl}
            alt={initialItem.imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default MultiLingualGreetings
