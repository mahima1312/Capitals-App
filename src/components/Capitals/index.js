import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state
    return countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCountryId,
    )
  }

  render() {
    const {country} = this.getCountry()
    return (
      <div className="app-container">
        <div className="country-capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selection-container">
            <select className="selection" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className=""
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="capital">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
