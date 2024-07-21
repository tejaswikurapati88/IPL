// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCardDetails} = this.props
    const {id, name, teamImageUrl} = teamCardDetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li>
          <div className="card">
            <img className="car-img" src={teamImageUrl} alt={name} />
            <p className="name">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}
export default TeamCard
