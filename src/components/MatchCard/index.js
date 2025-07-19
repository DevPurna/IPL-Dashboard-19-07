// Write your code here
import './index.css'

const MatchCard = ({eachMatchDetails}) => {
  const formattedeachMatchDetails = {
    umpires: eachMatchDetails.umpires,
    result: eachMatchDetails.result,
    manOfTheMatch: eachMatchDetails.man_of_the_match,
    id: eachMatchDetails.id,
    date: eachMatchDetails.date,
    venue: eachMatchDetails.venue,
    competingTeam: eachMatchDetails.competing_team,
    competingTeamLogo: eachMatchDetails.competing_team_logo,
    firstInnings: eachMatchDetails.first_innings,
    secondInnings: eachMatchDetails.second_innings,
    matchStatus: eachMatchDetails.match_status,
  }
  const statusClassName =
    formattedeachMatchDetails.matchStatus === 'Won'
      ? 'win-status'
      : 'loss-status'

  return (
    <li className="match-card-item">
      <img
        className="match-card-team-logo"
        src={formattedeachMatchDetails.competingTeamLogo}
        alt={`competing team ${formattedeachMatchDetails.competingTeam}`}
      />
      <p className="matchCard-competingTeam">
        {formattedeachMatchDetails.competingTeam}
      </p>
      <p className="match-card-result">{formattedeachMatchDetails.result}</p>
      <p className={`match-card-status ${statusClassName}`}>
        {formattedeachMatchDetails.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
