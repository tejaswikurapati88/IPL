// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getIPLList()
  }

  getIPLList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const daTa = data.teams
    const formattedData = daTa.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamList: formattedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <Link to="/">
            <div className="bg-container">
              <div className="logo-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logo"
                />
                <h1 className="main-heading">IPL Dashboard</h1>
              </div>
              <ul className="list-cont">
                {teamList.map(eachTeam => (
                  <TeamCard teamCardDetails={eachTeam} key={eachTeam.id} />
                ))}
              </ul>
            </div>
          </Link>
        )}
      </div>
    )
  }
}

export default Home
