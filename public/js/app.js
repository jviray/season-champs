class TeamList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
    };

    this.handleTeamUpVote = this.handleTeamUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ teams: Seed.teams });
  }

  handleTeamUpVote(teamId) {
    const nextTeams = this.state.teams.map((team) => {
      if (team.id === teamId) {
        return Object.assign({}, team, {
          votes: team.votes + 1,
        });
      } else {
        return team;
      }
    });
    this.setState({
      teams: nextTeams,
    });
  }

  render() {
    const teams = this.state.teams.sort((a, b) => (
      b.votes - a.votes
    ));
    const teamComponents = teams.map((team) => (
      <Team
        key={'team-' + team.id}
        id={team.id}
        name={team.name}
        tagline={team.tagline}
        url={team.url}
        votes={team.votes}
        teamImageUrl={team.teamImageUrl}
        onVote={this.handleTeamUpVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        {teamComponents}
      </div>
    );
  }
}

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.teamImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.name}
            </a>
            <p>
              {this.props.tagline}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TeamList />,
  document.getElementById('content')
);
