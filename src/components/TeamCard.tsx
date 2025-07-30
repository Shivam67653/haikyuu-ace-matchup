import { Card } from "@/components/ui/card";

import { Team } from "@/data/teams";

interface TeamCardProps {
  team: Team;
  isSelected: boolean;
  onClick: () => void;
}

export const TeamCard = ({ team, isSelected, onClick }: TeamCardProps) => {
  return (
    <Card
      className={`team-card cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'ring-2 ring-primary anime-glow scale-105' 
          : 'hover:scale-105'
      } ${team.colors}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={team.logo} 
          alt={`${team.name} logo`}
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-lg font-bold text-white">{team.name}</h3>
          <p className="text-sm text-white/80">{team.characters.map(c => c.name.split(' ')[0]).join(', ')}</p>
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">✓</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};