import { useState } from 'react';
import { Users, Search, Filter, MapPin, Star, Check, Clock, MessageSquare, UserPlus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Sample team data - would come from API in production
const TEAMS_DATA = [
  {
    id: 1,
    name: 'CodeCrafters',
    description: 'We\'re building a collaborative code editor with real-time features and AI-powered suggestions.',
    members: 3,
    maxMembers: 5,
    skills: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
    location: 'Remote',
    status: 'Active',
    experience: 'Intermediate',
    commitment: 'Part-time',
    rating: 4.8,
    avatar: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'BlockchainBuilders',
    description: 'Developing a decentralized marketplace for digital assets with focus on security and scalability.',
    members: 4,
    maxMembers: 6,
    skills: ['Solidity', 'Ethereum', 'JavaScript', 'Smart Contracts'],
    location: 'San Francisco, CA',
    status: 'Active',
    experience: 'Advanced',
    commitment: 'Full-time',
    rating: 4.6,
    avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Data Wizards',
    description: 'Creating ML-powered analytics dashboard for small businesses to gain insights from their customer data.',
    members: 2,
    maxMembers: 4,
    skills: ['Python', 'TensorFlow', 'React', 'D3.js'],
    location: 'Remote',
    status: 'Forming',
    experience: 'Intermediate',
    commitment: 'Part-time',
    rating: 4.2,
    avatar: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'MobileMinds',
    description: 'Building a cross-platform mobile app for mental health tracking and mindfulness practices.',
    members: 3,
    maxMembers: 5,
    skills: ['React Native', 'Firebase', 'UI/UX Design'],
    location: 'Berlin, Germany',
    status: 'Active',
    experience: 'Beginner-Friendly',
    commitment: 'Flexible',
    rating: 4.5,
    avatar: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 5,
    name: 'Cloud Crafters',
    description: 'Developing a serverless platform to help small businesses deploy microservices without infrastructure knowledge.',
    members: 5,
    maxMembers: 7,
    skills: ['AWS', 'DevOps', 'Node.js', 'Terraform'],
    location: 'Remote',
    status: 'Active',
    experience: 'Advanced',
    commitment: 'Part-time',
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 6,
    name: 'Web3 Explorers',
    description: 'Creating educational resources and demos to help developers understand and build on blockchain technology.',
    members: 2,
    maxMembers: 6,
    skills: ['Blockchain', 'JavaScript', 'Documentation', 'Teaching'],
    location: 'Remote',
    status: 'Forming',
    experience: 'Beginner-Friendly',
    commitment: 'Flexible',
    rating: 4.3,
    avatar: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const TeamsPage = () => {
  const [teams, setTeams] = useState(TEAMS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');

  // Filter options
  const statusOptions = ['All', 'Active', 'Forming'];
  const experienceOptions = ['All', 'Beginner-Friendly', 'Intermediate', 'Advanced'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          team.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          team.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = selectedStatus === 'All' || team.status === selectedStatus;
    const matchesExperience = selectedExperience === 'All' || team.experience === selectedExperience;
    
    return matchesSearch && matchesStatus && matchesExperience;
  });

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Team</h1>
          <p className="text-gray-400 mb-8">
            Join existing teams or create your own to collaborate on exciting projects with fellow developers.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            leftIcon={<Users className="h-5 w-5" />}
          >
            Create a New Team
          </Button>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-gray-800 rounded-xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search teams by name, description or skills..."
                className="input pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select
                  className="input appearance-none pr-10"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statusOptions.map(status => (
                    <option key={status} value={status}>{status} Teams</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative">
                <select
                  className="input appearance-none pr-10"
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                >
                  {experienceOptions.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.length > 0 ? (
            filteredTeams.map(team => (
              <Card 
                key={team.id} 
                hoverEffect 
                className="flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={team.avatar} 
                    alt={team.name} 
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{team.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${team.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}
                      >
                        {team.status === 'Active' ? <Check className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                        {team.status}
                      </span>
                      <span className="flex items-center ml-2 text-gray-400 text-xs">
                        <Star className="h-3 w-3 mr-1 text-yellow-400" />
                        {team.rating}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{team.description}</p>
                
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {team.location}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm text-gray-300 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">{team.experience}</span>
                    <span className="text-sm text-gray-400">{team.commitment}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">{team.members}</span>/<span>{team.maxMembers}</span> members
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="secondary"
                        size="sm"
                        leftIcon={<MessageSquare className="h-4 w-4" />}
                      >
                        Contact
                      </Button>
                      <Button 
                        variant={team.members < team.maxMembers ? "primary" : "secondary"}
                        size="sm"
                        leftIcon={<UserPlus className="h-4 w-4" />}
                        disabled={team.members >= team.maxMembers}
                      >
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No teams match your search criteria.</p>
              <Button 
                variant="secondary" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedStatus('All');
                  setSelectedExperience('All');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;