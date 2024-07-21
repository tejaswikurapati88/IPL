// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latest} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnergs,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latest
    return (
      <div className="latest-bg-container">
        <div className="latest-cont">
          <p className="lat-main-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="desc">{venue}</p>
          <p className="desc">{result}</p>
        </div>
        <img
          className="com-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <div className="lat-sub-cont">
          <p className="desc">First Innings</p>
          <p className="ans">{firstInnergs}</p>
          <p className="desc">Second Innings</p>
          <p className="ans">{secondInnings}</p>
          <p className="desc">Man of The Match</p>
          <p className="ans">{manOfTheMatch}</p>
          <p className="desc">Umpires</p>
          <p className="ans">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
