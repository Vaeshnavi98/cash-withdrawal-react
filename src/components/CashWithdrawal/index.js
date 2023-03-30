import {Component} from 'react'
import './index.css'
import Denomination from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  Button = value => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - value,
      }))
    }
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="div-deco1">
        <div className="div-deco2">
          <div className="div-deco3">
            <p className="para-deco">S</p>
            <h1 className="head-deco">Sarah Williams</h1>
          </div>
          <div className="div-deco4">
            <p className="para-deco1">Your Balance</p>
            <p className="head-deco1">{count}</p>
          </div>
          <p className="para-deco1 text-deco">In Rupees</p>
          <div className="div-deco5">
            <p className="head-deco1">Withdraw</p>
            <p className="para-deco1">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div>
            <ul>
              {denominationsList.map(eachUser => (
                <Denomination
                  details={eachUser}
                  key={eachUser.id}
                  buttonDetails={this.Button}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
