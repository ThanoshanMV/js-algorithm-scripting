const personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  //we'll filter force users only
  const forceUsers = personnel.filter(x => x.isForceUser);
  console.log(forceUsers);

  //we'll get the total score of force users
  const shootingScoreAll = forceUsers.map(x => x.pilotingScore +x.shootingScore);

  //Finally, get the total of all of them
  const totalScore = shootingScoreAll.reduce((acc,x) => acc+x,0);
  console.log(totalScore);