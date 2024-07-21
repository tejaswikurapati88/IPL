// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {lData: {}, rData: [], teUrl: '', isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    console.log(data.recent_matches)
    const responseData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = responseData
    const latData = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnergs: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const recData = {
      competingTeam: recentMatches.competing_team,
      competingTeamLogo: recentMatches.competing_team_logo,
      date: recentMatches.date,
      firstInnergs: recentMatches.first_innings,
      id: recentMatches.id,
      manOfTheMatch: recentMatches.man_of_the_match,
      matchStatus: recentMatches.match_status,
      result: recentMatches.result,
      secondInnings: recentMatches.second_innings,
      umpires: recentMatches.umpires,
      venue: recentMatches.venue,
    }
    console.log(recData)
    const {teUrl} = this.state
    this.setState({
      lData: latData,
      rData: recentMatches,
      teUrl: teamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {lData, rData, teUrl, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-container">
            <img className="banner" src={teUrl} alt="team banner" />
            <p className="side-heading">Latest Matches</p>
            <LatestMatch latest={lData} />
            <ul>
              {rData.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
