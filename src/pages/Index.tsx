import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/TeamCard";
import { MatchResult } from "@/components/MatchResult";
import { teams, generateQuote, generateMatchNarration, Team } from "@/data/teams";
import { Sparkles, Zap } from "lucide-react";

const Index = () => {
  const [selectedTeam1, setSelectedTeam1] = useState<Team | null>(null);
  const [selectedTeam2, setSelectedTeam2] = useState<Team | null>(null);
  const [matchResult, setMatchResult] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMatch = async () => {
    if (!selectedTeam1 || !selectedTeam2) return;

    setIsGenerating(true);
    
    // Simulate AI generation delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 2000));

    const team1Character = selectedTeam1.characters[Math.floor(Math.random() * selectedTeam1.characters.length)];
    const team2Character = selectedTeam2.characters[Math.floor(Math.random() * selectedTeam2.characters.length)];
    const team1Quote = generateQuote(selectedTeam1.id, team1Character.name);
    const team2Quote = generateQuote(selectedTeam2.id, team2Character.name);
    const { narration, winner, score } = generateMatchNarration(selectedTeam1, selectedTeam2);

    setMatchResult({
      team1: selectedTeam1,
      team2: selectedTeam2,
      team1Character,
      team2Character,
      team1Quote,
      team2Quote,
      narration,
      winner,
      score
    });

    setIsGenerating(false);
  };

  const resetMatch = () => {
    setMatchResult(null);
    setSelectedTeam1(null);
    setSelectedTeam2(null);
  };

  if (matchResult) {
    return (
      <div className="min-h-screen bg-background p-4">
        <MatchResult {...matchResult} onNewMatch={resetMatch} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-court opacity-10" />
        <div className="relative z-10 text-center py-16 px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              HAIKYUU!!
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
            Match Builder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select two teams and watch epic volleyball matches come to life with character quotes and dramatic narration!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Team Selection */}
        <Card className="match-card p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Choose Your Teams</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                isSelected={selectedTeam1?.id === team.id || selectedTeam2?.id === team.id}
                onClick={() => {
                  if (!selectedTeam1) {
                    setSelectedTeam1(team);
                  } else if (!selectedTeam2 && team.id !== selectedTeam1.id) {
                    setSelectedTeam2(team);
                  } else if (selectedTeam1.id === team.id) {
                    setSelectedTeam1(selectedTeam2);
                    setSelectedTeam2(null);
                  } else if (selectedTeam2?.id === team.id) {
                    setSelectedTeam2(null);
                  }
                }}
              />
            ))}
          </div>

          {/* Selected Teams Display */}
          {(selectedTeam1 || selectedTeam2) && (
            <div className="bg-secondary/30 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-center mb-4">Selected Matchup</h4>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  {selectedTeam1 ? (
                    <>
                      <div className="w-16 h-12 bg-gradient-karasuno rounded mb-2 mx-auto" />
                      <p className="font-bold">{selectedTeam1.name}</p>
                    </>
                  ) : (
                    <div className="text-muted-foreground">Select Team 1</div>
                  )}
                </div>
                
                <div className="text-3xl font-bold text-muted-foreground">VS</div>
                
                <div className="text-center">
                  {selectedTeam2 ? (
                    <>
                      <div className="w-16 h-12 bg-gradient-nekoma rounded mb-2 mx-auto" />
                      <p className="font-bold">{selectedTeam2.name}</p>
                    </>
                  ) : (
                    <div className="text-muted-foreground">Select Team 2</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Generate Button */}
          <div className="text-center">
            <Button
              onClick={generateMatch}
              disabled={!selectedTeam1 || !selectedTeam2 || isGenerating}
              className="bg-gradient-karasuno hover:scale-105 transition-transform text-lg px-8 py-6 glow-effect"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Zap className="w-5 h-5 mr-2 animate-spin" />
                  Generating Epic Match...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Match!
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Instructions */}
        <div className="text-center text-muted-foreground">
          <p>🏐 Select two different teams to create your dream match</p>
          <p>✨ Each match features unique quotes and dramatic narration</p>
        </div>
      </div>
    </div>
  );
};

export default Index;