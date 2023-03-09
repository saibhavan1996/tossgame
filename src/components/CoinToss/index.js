import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, tossImage: true}

  getToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImage: true,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossImage: false,
      }))
    }
  }

  render() {
    const {heads, tails, tossImage} = this.state

    const image = tossImage
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="coin-main-bg-container">
        <div className="bg-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} className="image" alt="toss result" />
          <button type="button" onClick={this.getToss} className="btn">
            Toss Coin
          </button>

          <div className="score-details">
            <p className="toss-result">Total:{heads + tails} </p>
            <p className="toss-result">Heads:{heads} </p>
            <p className="toss-result">Tails:{tails} </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
