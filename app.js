//players
let players = []
let firstPlayer = players[0]
let secondPlayer = players[1]
let thirdlayer = players[2]
let fourthPlayer = players[3]
let fifthPlayer = players[4]
//player images
const userOneIcon = document.querySelector('.user1Icon')
const userTwoIcon = document.querySelector('.user2Icon')
const userThreeIcon = document.querySelector('.user3Icon')
const userFourIcon = document.querySelector('.user4Icon')
const userFiveIcon = document.querySelector('.user5Icon')
//player buttons
const firstPlayerButton = document.getElementById('agent1button')
const secondPlayerButton = document.getElementById('agent2button')
const thirdlayerButton = document.getElementById('agent3button')
const fourthPlayerButton = document.getElementById('agent4button')
const fifthPlayerButton = document.getElementById('agent5button')


const agents = [
  {name: "astra", img: "images/astra.jpg"},
  {name: "breach", img: "images/breach.jpg"},
  {name: "brimstone", img: "images/brimstone.jpg"},
  {name: "chamber", img: "images/chamber.jpg"},
  {name: "cypher", img: "images/cypher.jpg"},
  {name: "harbor", img: "images/harbor.jpg"},
  {name: "jett", img: "images/jett.jpg"},
  {name: "kayo", img: "images/kayo.png"},
  {name: "killjoy", img: "images/killjoy.jpg"},
  {name: "neon", img: "images/neon.jpg"},
  {name: "omen", img: "images/omen.jpg"},
  {name: "phoenix", img: "images/phoenix.jpg"},
  {name: "raze", img: "images/raze.jpg"},
  {name: "reyna", img: "images/reyna.jpg"},
  {name: "sage", img: "images/sage.jpg"},
  {name: "skye", img: "images/skye.jpg"},
  {name: "sova", img: "images/sova.jpg"},
  {name: "viper", img: "images/viper.jpg"},
  {name: "yoru", img: "images/yoru.jpg"},
  {name: "fade", img: "images/fade.jpg"}
].map((a) => ({
  ...a,
  id: `${a.name.toLowerCase()}_${getRandomArbitrary(1000, 9999)}`,
}));

const Players = [
  {
    photo: null,
    isLocked: true,
    picks: [],
  },
  {
    photo: null,
    isLocked: true,
    picks: [],
  },
  {
    photo: null,
    isLocked: true,
    picks: [],
  },
  {
    photo: null,
    isLocked: true,
    picks: [],
  },
  {
    photo: null,
    isLocked: true,
    picks: [],
  },
];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

NodeList.prototype.filter = function (cb) {
  const arr = [];

  for (const item of this) {
    if (cb(item)) {
      arr.push(item);
    }
  }

  return arr;
};

function lockedProfile() {
  function renderAgentPicks() {
    const renderAgentsPicker = () =>
      agents.map((a) => {
        const id = `${a.id}__${getRandomArbitrary(1000, 9999)}`;

        const input = document.createElement("input");
        input.id = id;
        input.value = a.id;
        input.type = "checkbox";

        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.innerText = a.name;
        label.appendChild(input);

        const wrapper = document.createElement("div");
        wrapper.classList.add("agent");
        wrapper.appendChild(label);

        return wrapper;
      });

    document
      .querySelectorAll('[data-section="agents-pick"]')
      .forEach((e) => renderAgentsPicker().forEach((a) => e.appendChild(a)));
  }

  renderAgentPicks();

  Array.from(document.querySelectorAll(".profile button")).forEach((e) =>
    e.addEventListener("click", (buttonEvent) => onClick(buttonEvent))
  );

  function onClick({ target }) {
    const DISPLAY_BLOCK = "block";
    const SHOW_MORE = "Show more";
    const parent = target.parentElement;
    const unlockedCheck = parent.querySelector('input[value="unlock"]');
    if (!unlockedCheck.checked) {
      return;
    }

    const hiddenDiv = parent.querySelector("div");

    if (hiddenDiv.classList.contains("hidden")) {
      hiddenDiv.classList.remove("hidden");
      target.innerText = "PICK AGENT";

      return;
    }

    const profile = target.closest(".profile");

    if (!profile) {
      return;
    }

    const selectedAgents = profile
      .querySelectorAll('[data-section="agents-pick"] input[type="checkbox"]')
      .filter((input) => input.checked)
      .map((input) => agents.find((a) => input.value === a.id).name);

    // console.log(selectedAgents);
    players.push(selectedAgents)
    
    for (let i = 0; i <= 5; i++) {
      let firstPlayerCurrentPick = []
      let secondPlayerCurrentPick = []
      let thirdPlayerCurrentPick = []
      let fourthPlayerCurrentPick = []
      let fifthPlayerCurrentPick = []
      let stringToGetImage = ''
      const playerArr = players[i]
      let result = get_random(playerArr)
    
      //adding photo to first player
      if(i === 0){
        firstPlayerButton.addEventListener('click', () => {
        console.log('first result -->',result);
        
          stringToGetImage += `images/${result}.jpg`
          document.querySelector('.user1Icon').src = stringToGetImage;
          stringToGetImage += ''
          firstPlayerCurrentPick.push(result)
          // document.querySelector('.user1Icon').src = 'images/breach.jpg'
          console.log('sec result -->', result);
          result = get_random(playerArr)
        }
      )
        return

      //adding photo to second player
      }
      if(i === 1){
        while(firstPlayerCurrentPick.includes(result)){
          result = get_random(playerArr)
        }
        secondPlayerButton.addEventListener('click', () => {
        stringToGetImage += `images/${result}.jpg`
        document.querySelector('.user2Icon').src = stringToGetImage;
      })
        return
        
      }
    }

    // for (let i = 0; i < selectedAgents.length; i++) {
    //   console.log(selectedAgents[i].name);
    // }

    hiddenDiv.classList.add("hidden");
    target.innerText = SHOW_MORE;
  }
}

// function getRandomAgent() {
//   const image1 = document.querySelector("#userIcon");
//   const test = document.getElementById("mybutton");

//   document.getElementById("myImageId").src = "images/skye.jpg";
//   test.addEventListener("click", (_) => getRandomAgent());
// }

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}