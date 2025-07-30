import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";

import { Team, Character } from "@/data/teams";

interface MatchResultProps {
  team1: Team;
  team2: Team;
  team1Character: Character;
  team2Character: Character;
  team1Quote: string;
  team2Quote: string;
  narration: string;
  winner: string;
  score: string;
  onNewMatch: () => void;
}

export const MatchResult = ({
  team1,
  team2,
  team1Character,
  team2Character,
  team1Quote,
  team2Quote,
  narration,
  winner,
  score,
  onNewMatch
}: MatchResultProps) => {
  const downloadPoster = async () => {
    const html2canvas = (await import('html2canvas')).default;
    const posterElement = document.getElementById('match-poster');
    if (posterElement) {
      const canvas = await html2canvas(posterElement, {
        backgroundColor: '#0f172a',
        scale: 2,
        logging: false
      });
      const link = document.createElement('a');
      link.download = `haikyuu-match-${team1.name.replace(/\s+/g, '-')}-vs-${team2.name.replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="slide-in">
      <Card id="match-poster" className="match-card p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            MATCH RESULT
          </h2>
          <div className="h-1 w-20 bg-gradient-karasuno mx-auto mt-2 rounded-full" />
        </div>

        {/* Teams Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Team 1 */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={team1.logo} 
                alt={team1.name}
                className="w-32 h-24 object-cover rounded-lg mx-auto"
              />
              <div className={`absolute inset-0 rounded-lg ${team1.colors} opacity-20`} />
            </div>
            <h3 className="text-xl font-bold mb-2">{team1.name}</h3>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={team1Character.image} 
                  alt={team1Character.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-sm font-semibold">{team1Character.name}</p>
                </div>
              </div>
              <p className="text-sm italic">"{team1Quote}"</p>
            </div>
          </div>

          {/* VS and Score */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-bold text-muted-foreground mb-4">VS</div>
            <div className="bg-gradient-court p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-black mb-2">FINAL SCORE</div>
              <div className="text-3xl font-black text-black">{score}</div>
              <div className="text-lg font-bold text-black mt-2">
                🏆 {winner} WINS!
              </div>
            </div>
          </div>

          {/* Team 2 */}
          <div className="text-center">
            <div className="relative mb-4">
              <img 
                src={team2.logo} 
                alt={team2.name}
                className="w-32 h-24 object-cover rounded-lg mx-auto"
              />
              <div className={`absolute inset-0 rounded-lg ${team2.colors} opacity-20`} />
            </div>
            <h3 className="text-xl font-bold mb-2">{team2.name}</h3>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={team2Character.image} 
                  alt={team2Character.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-sm font-semibold">{team2Character.name}</p>
                </div>
              </div>
              <p className="text-sm italic">"{team2Quote}"</p>
            </div>
          </div>
        </div>

        {/* Match Narration */}
        <div className="bg-card/50 p-6 rounded-xl mb-8 border border-border/20">
          <h4 className="text-lg font-bold mb-3 text-center">📺 MATCH HIGHLIGHT</h4>
          <p className="text-center text-foreground/90 leading-relaxed">
            {narration}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={downloadPoster}
            className="bg-gradient-karasuno hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Poster
          </Button>
          <Button 
            onClick={onNewMatch}
            variant="outline"
            className="hover:scale-105 transition-transform"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            New Match
          </Button>
        </div>
      </Card>
    </div>
  );
};