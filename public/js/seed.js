window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const teams = [
    {
      id: 1,
      name: 'Houston Astros',
      tagline: 'So far it\'s been a cakewalk for the Astros, how much higher can they fly?',
      url: 'https://www.mlb.com/astros',
      votes: generateVoteCount(),
      teamImageUrl: 'images/teams/image-astros.png',
    },
    {
      id: 2,
      name: 'Boston Red Sox',
      tagline: 'They got their rematch, will the Red Sox take down the defending champs?',
      url: 'https://www.mlb.com/redsox',
      votes: generateVoteCount(),
      teamImageUrl: 'images/teams/image-redsox.png',
    },
    {
      id: 3,
      name: 'Los Angeles Dodgers',
      tagline: 'The Dodgers are back in the NLCS, but there’s still work to do before their mission is complete. ',
      url: 'https://www.mlb.com/dodgers',
      votes: generateVoteCount(),
      teamImageUrl: 'images/teams/image-dodgers.png',
    },
    {
      id: 4,
      name: 'Milwaukee Brewers',
      tagline: 'They\'ve been overlooked all season, but can the Brewers continue to shock the league?',
      url: 'https://www.mlb.com/brewers',
      votes: generateVoteCount(),
      teamImageUrl: 'images/teams/image-brewers.png',
    },
  ];

  return { teams: teams };
}());
