import karasunoLogo from "@/assets/karasuno-logo.jpg";
import nekomaLogo from "@/assets/nekoma-logo.jpg";
import aobaLogo from "@/assets/aoba-logo.jpg";
import shiratorizawaLogo from "@/assets/shiratorizawa-logo.jpg";

export interface Team {
  id: string;
  name: string;
  logo: string;
  colors: string;
  players: string[];
}

export const teams: Team[] = [
  {
    id: "karasuno",
    name: "Karasuno High",
    logo: karasunoLogo,
    colors: "team-karasuno",
    players: ["Hinata", "Kageyama", "Daichi", "Asahi", "Nishinoya"]
  },
  {
    id: "nekoma",
    name: "Nekoma High",
    logo: nekomaLogo,
    colors: "team-nekoma",
    players: ["Kenma", "Kuroo", "Yamamoto", "Yaku", "Fukunaga"]
  },
  {
    id: "aoba-johsai",
    name: "Aoba Johsai",
    logo: aobaLogo,
    colors: "team-aoba",
    players: ["Oikawa", "Iwaizumi", "Hanamaki", "Matsukawa", "Kyotani"]
  },
  {
    id: "shiratorizawa",
    name: "Shiratorizawa",
    logo: shiratorizawaLogo,
    colors: "team-shiratorizawa",
    players: ["Ushijima", "Tendou", "Semi", "Shirabu", "Goshiki"]
  }
];

export const generateQuote = (teamId: string, playerName: string): string => {
  const quotes: { [key: string]: string[] } = {
    karasuno: [
      "Being the best decoy ever is as cool as being the ace!",
      "You are where you need to be.",
      "Volleyball is a sport where you're always looking up!",
      "The future belongs to those who believe in the beauty of their dreams!",
      "Don't you dare look down!"
    ],
    nekoma: [
      "The ball hasn't dropped yet!",
      "We're like blood in our veins. We must flow without stopping.",
      "Cats don't give up that easily.",
      "If you're going to hit it, hit it until it breaks!",
      "Connect the volleyball!"
    ],
    "aoba-johsai": [
      "If you're going to hit it, hit it until it breaks!",
      "Talent is something you make bloom, instinct is something you polish!",
      "I won't lose to anyone in terms of speed!",
      "The stronger the opponent, the more fired up I get!",
      "Being the best decoy ever is as cool as being the ace!"
    ],
    shiratorizawa: [
      "You should have come to Shiratorizawa.",
      "I will defeat everything in my path!",
      "Overwhelming power is the best strategy!",
      "Paradise found on the left!",
      "Guess monsters are only human after all."
    ]
  };

  const teamQuotes = quotes[teamId] || quotes.karasuno;
  return teamQuotes[Math.floor(Math.random() * teamQuotes.length)];
};

export const generateMatchNarration = (team1: Team, team2: Team): { narration: string; winner: string; score: string } => {
  const narratives = [
    `In a heart-stopping rally, both teams showed incredible determination! The final spike came down to the wire as the crowd held their breath. What an incredible display of volleyball!`,
    `The match reached its climax with an epic battle at the net! Both teams pushed beyond their limits, delivering spectacular plays that will be remembered forever!`,
    `With sweat and determination, both teams fought until the very last point! The gymnasium erupted as the final point was scored in this legendary match!`,
    `An incredible display of teamwork and individual skill! The match went back and forth, with each team refusing to give up until the final whistle!`
  ];

  const winner = Math.random() > 0.5 ? team1.name : team2.name;
  const scores = [
    "25-23, 23-25, 25-22",
    "25-21, 24-26, 25-20",
    "23-25, 25-19, 25-23",
    "25-18, 22-25, 25-21"
  ];

  return {
    narration: narratives[Math.floor(Math.random() * narratives.length)],
    winner,
    score: scores[Math.floor(Math.random() * scores.length)]
  };
};