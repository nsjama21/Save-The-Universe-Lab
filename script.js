// Ship Properties
// hull is the same as hitpoints.If hull reaches 0 or less, the ship is destroyed

// firepower is the amount of damage done to the hull of the target with a successful hit

// accuracy is the chance between 0 and 1 that the ship will hit its target

// Your spaceship, the USS HelloWorld should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// You could be battling six alien ships each with unique values.


// Dom Queries
const startContainer = document.querySelector("#start-container")


// Battle
const prompt = document.querySelector("#battle-prompt")


class Player {
  constructor(name) {
    this.name = name;
  }
}

const ussMyShip = {
  hull: 20,
  firepower: 5,
  accuracy: .7


}



const alienShipOne = {
  hull: Math.ceil(Math.random() * (6 - 3) + 3),
  firepower: Math.ceil(Math.random() * (4 - 2) + 2),
  accuracy: Math.random() * (.8 - .6) + (.6)
}

console.log(alienShipOne)

console.log(ussMyShip)



const game = {
  // players: [],
  // playerOneReady: false,
  start: function () {
    startContainer.classList.toggle("hide")
    // gameContainer.classList.toggle("hide")
  },

  battle: function () {
    console.log("We are battling")

    const ussMyShip = {
      hull: 20,
      firepower: 5,
      accuracy: .7

    }

    const alienShipOne = {
      hull: Math.ceil(Math.random() * (6 - 3) + 3),
      firepower: Math.ceil(Math.random() * (4 - 2) + 2),
      accuracy: Math.random() * (.8 - .6) + (.6)
    }


    if (Math.random() < alienShipOne.accuracy) {
      prompt.innerText = `You have been hit!`
    } else if (Math.random() > alienShipOne.accuracy) {
      prompt.innerText = `You have hit the alien!`
    } else if (ussMyShip.hull < alienShipOne.hull) {
      prompt.innerText = `The UssMyShip is losing points!`
    } else if (ussMyShip.hull > alienShipOne.hull) {
      prompt.innerText = `The AlienShipOne is losing points!`
    } else if (ussMyShip.firepower > alienShipOne.firepower) {
      prompt.innerText = `The AlienShipOne has damaged the UssMyShip severely!`
    } else if (alienShipOne.firepower > ussMyShip.firepower) {
      prompt.innerText = `The UssMyShip has damaged the AlienShipOne severely!`
    } else if (ussMyShip.hull <= 0) {
      prompt.innerText = `The UssMyShip has been destroyed!`
    } else if (alienShipOne.hull <= 0) {
      prompt.innerText = `The AlienShipOne has been destroyed!`
    }
  },


}







