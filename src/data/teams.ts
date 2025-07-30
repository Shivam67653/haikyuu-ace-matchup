import karasunoLogo from "@/assets/karasuno-logo.jpg";
import nekomaLogo from "@/assets/nekoma-logo.jpg";
import aobaLogo from "@/assets/aoba-logo.jpg";
import shiratorizawaLogo from "@/assets/shiratorizawa-logo.jpg";
import fukurodaniLogo from "@/assets/fukurodani-logo.jpg";
import inarizakiLogo from "@/assets/inarizaki-logo.jpg";

// Character images
import hinataImg from "@/assets/characters/hinata.jpg";
import kageyamaImg from "@/assets/characters/kageyama.jpg";
import oikawaImg from "@/assets/characters/oikawa.jpg";
import kurooImg from "@/assets/characters/kuroo.jpg";
import ushijimaImg from "@/assets/characters/ushijima.jpg";
import bokutoImg from "@/assets/characters/bokuto.jpg";
import atsumuImg from "@/assets/characters/atsumu.jpg";

export interface Character {
  name: string;
  image: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  colors: string;
  characters: Character[];
}

export const teams: Team[] = [
  {
    id: "karasuno",
    name: "Karasuno High",
    logo: karasunoLogo,
    colors: "team-karasuno",
    characters: [
      { name: "Hinata Shoyo", image: hinataImg },
      { name: "Kageyama Tobio", image: kageyamaImg },
      { name: "Daichi Sawamura", image: hinataImg },
      { name: "Asahi Azumane", image: kageyamaImg },
      { name: "Nishinoya Yu", image: hinataImg }
    ]
  },
  {
    id: "nekoma",
    name: "Nekoma High", 
    logo: nekomaLogo,
    colors: "team-nekoma",
    characters: [
      { name: "Kuroo Tetsurou", image: kurooImg },
      { name: "Kenma Kozume", image: kurooImg },
      { name: "Yamamoto Taketora", image: kurooImg },
      { name: "Yaku Morisuke", image: kurooImg },
      { name: "Fukunaga Shohei", image: kurooImg }
    ]
  },
  {
    id: "aoba-johsai", 
    name: "Aoba Johsai",
    logo: aobaLogo,
    colors: "team-aoba",
    characters: [
      { name: "Oikawa Tooru", image: oikawaImg },
      { name: "Iwaizumi Hajime", image: oikawaImg },
      { name: "Hanamaki Takahiro", image: oikawaImg },
      { name: "Matsukawa Issei", image: oikawaImg },
      { name: "Kyotani Kentaro", image: oikawaImg }
    ]
  },
  {
    id: "shiratorizawa",
    name: "Shiratorizawa",
    logo: shiratorizawaLogo,
    colors: "team-shiratorizawa", 
    characters: [
      { name: "Ushijima Wakatoshi", image: ushijimaImg },
      { name: "Tendou Satori", image: ushijimaImg },
      { name: "Semi Eita", image: ushijimaImg },
      { name: "Shirabu Kenjirou", image: ushijimaImg },
      { name: "Goshiki Tsutomu", image: ushijimaImg }
    ]
  },
  {
    id: "fukurodani",
    name: "Fukurodani Academy",
    logo: fukurodaniLogo,
    colors: "team-fukurodani",
    characters: [
      { name: "Bokuto Koutarou", image: bokutoImg },
      { name: "Akaashi Keiji", image: bokutoImg },
      { name: "Konoha Akinori", image: bokutoImg },
      { name: "Komi Haruki", image: bokutoImg },
      { name: "Washio Tatsuki", image: bokutoImg }
    ]
  },
  {
    id: "inarizaki",
    name: "Inarizaki High",
    logo: inarizakiLogo,
    colors: "team-inarizaki", 
    characters: [
      { name: "Miya Atsumu", image: atsumuImg },
      { name: "Miya Osamu", image: atsumuImg },
      { name: "Kita Shinsuke", image: atsumuImg },
      { name: "Suna Rintarou", image: atsumuImg },
      { name: "Ojiro Aran", image: atsumuImg }
    ]
  }
];

export const generateQuote = (teamId: string, characterName: string): string => {
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
    ],
    fukurodani: [
      "Hey, hey, hey! I'm in top form today!",
      "When I'm on a roll, I'm unstoppable!",
      "I'm the ace! Leave it to me!",
      "Just watch me! I'll blow your mind!",
      "Normal people think in a normal way!"
    ],
    inarizaki: [
      "We don't need memories of our past wins!",
      "Being called a genius is a curse, y'know?",
      "I'm gonna set for you until you're sick of it!",
      "Everyone's watching us, so let's give them a show!",
      "Volleyball is a team sport, but it starts with individual skill!"
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