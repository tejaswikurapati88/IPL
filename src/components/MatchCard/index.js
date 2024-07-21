// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  constructor(props) {
    super(props)
    this.state = {matchDetails: this.props.matchDetails, isWon: true}
  }

  componentDidMount() {
    const {matchDetails} = this.state
    this.convertInToCamel(matchDetails)
  }

  convertInToCamel = data => {
    const updatedData = {
      competingTeam: data.competing_team,
      competingTeamLogo: data.competing_team_logo,
      date: data.date,
      firstInnergs: data.first_innings,
      id: data.id,
      manOfTheMatch: data.man_of_the_match,
      matchStatus: data.match_status,
      result: data.result,
      secondInnings: data.second_innings,
      umpires: data.umpires,
      venue: data.venue,
    }
    let status
    if (updatedData.matchStatus === 'Won') {
      status = true
    } else {
      status = false
    }
    this.setState({matchDetails: updatedData, isWon: status})
  }

  render() {
    const {matchDetails, isWon} = this.state
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
    } = matchDetails
    const classCol = isWon ? 'greenColo' : 'RedCo'
    return (
      <li>
        <div className="rec-bg-container">
          <img
            className="rec-img"
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
          <p className="rec-head">{competingTeam}</p>
          <p className="rec-des">{result}</p>
          <p className={classCol}>{matchStatus}</p>
        </div>
      </li>
    )
  }
}

export default MatchCard
