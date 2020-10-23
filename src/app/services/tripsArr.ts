export let TripsArr = [
    {
      id:1,
      from: 'Israel',
      to: 'Istanbul',
      departFlights: [
        {
          from: 'Israel',
          to: 'Greece',
          duration: 2
        },
        {
          from: 'Greece',
          to: 'Istanbul',
          duration: 2
        }
      ],
      returnFlights: [
        {
          from: 'Istanbul',
          to: 'Israel',
          duration: 2
        },
      ],
      departDur: function() {
        let totalDur;
        for (let i = 0; i < this.departFlights.length; i++) {
          totalDur = this.departFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      returnDur: function() {
        let totalDur;
        for (let i = 0; i < this.returnFlights.length; i++) {
          totalDur = this.returnFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      price: 180,
      date: '2020-10-20 - 2020-10-30',
    },
    {
      id:2,
      from: 'Israel',
      to: 'Istanbul',
      departFlights: [{
        from: 'Israel',
        to: 'Istanbul',
        duration: 2
      }],
      returnFlights: [{
        from: 'Istanbul',
        to: 'Israel',
        duration: 2
      }],
      departDur: function() {
        let totalDur;
        for (let i = 0; i < this.departFlights.length; i++) {
          totalDur = this.departFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      returnDur: function() {
        let totalDur;
        for (let i = 0; i < this.returnFlights.length; i++) {
          totalDur = this.returnFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      price: 200,
      date: '2020-10-20 - 2020-10-30',
    },
    {
      id:3,
      from: 'Israel',
      to: 'New York',
      departFlights: [
        {
        from: 'Israel',
        to: 'France',
        duration: 4
      },
      {
        from: 'France',
        to: 'New York',
        duration: 10
      },
    ],
      returnFlights: [{
        from: 'New York',
        to: 'Israel',
        duration: 12
      }],
      departDur: function() {
        let totalDur;
        for (let i = 0; i < this.departFlights.length; i++) {
          totalDur = this.departFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      returnDur: function() {
        let totalDur;
        for (let i = 0; i < this.returnFlights.length; i++) {
          totalDur = this.returnFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      price: 1000,
      date: '2020-10-15 - 2020-10-30',
    },
    {
      id:4,
      from: 'Israel',
      to: 'New Zealand',
      departFlights: [
        {
          from: 'Israel',
          to: 'China',
          duration: 10
        },
        {
          from: 'China',
          to: 'New Zealand',
          duration: 5
        }
      ],
      returnFlights: [
        {
          from: 'New Zealand',
          to: 'Israel',
          duration: 14
        },
      ],
      departDur: function() {
        let totalDur;
        for (let i = 0; i < this.departFlights.length; i++) {
          totalDur = this.departFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      returnDur: function() {
        let totalDur;
        for (let i = 0; i < this.returnFlights.length; i++) {
          totalDur = this.returnFlights.map(f => f.duration).reduce(function(acc, val) { return acc + val; }, 0);
        }
        return totalDur;
      },
      price: 1500,
      date: '2020-10-20 - 2020-10-30',
    },
  ];