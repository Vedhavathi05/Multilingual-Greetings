import {Component} from 'react'

import './App.css'

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

class App extends Component {
  state = {
    ActiveLanguage: languageGreetingsList[0].id,
  }

  renderElements = () => {
    const {ActiveLanguage} = this.state
    const activeLanguageElement = languageGreetingsList.filter(
      each => each.id === ActiveLanguage,
    )
    return (
      <div>
        <img
          src={activeLanguageElement[0].imageUrl}
          alt={activeLanguageElement[0].imageAltText}
          className="image-styling"
        />
      </div>
    )
  }

  changeActiveLanguage = event => {
    this.setState({ActiveLanguage: event.target.id})
  }

  render() {
    const {ActiveLanguage} = this.state
    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>

        <ul className="ulContainer">
          {languageGreetingsList.map(each => (
            <li key={each.id}>
              <button
                type="button"
                id={each.id}
                onClick={this.changeActiveLanguage}
                className={`button-styling ${
                  ActiveLanguage === each.id ? 'addColor' : null
                }`}
              >
                {each.buttonText}
              </button>
            </li>
          ))}
        </ul>

        {this.renderElements()}
      </div>
    )
  }
}

export default App