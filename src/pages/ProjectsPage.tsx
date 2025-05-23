import { useState, useEffect } from 'react';
import { Filter, Search, RefreshCw, Star, GitBranch, ExternalLink } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Sample project data - would come from API in production
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'AI-Powered Recipe Generator',
    description: 'Create a web app that generates unique recipes based on available ingredients using machine learning algorithms.',
    complexity: 'Medium',
    skills: ['React', 'Python', 'TensorFlow', 'Flask'],
    category: 'Web Development',
    stars: 243,
    forks: 57
  },
  {
    id: 2,
    title: 'Blockchain Voting System',
    description: 'Develop a secure, transparent voting system using blockchain technology to ensure integrity and verification.',
    complexity: 'High',
    skills: ['Solidity', 'JavaScript', 'Ethereum', 'Web3'],
    category: 'Blockchain',
    stars: 178,
    forks: 34
  },
  {
    id: 3,
    title: 'AR Navigation Assistant',
    description: 'Build an augmented reality app that helps users navigate indoor spaces with visual overlays and directions.',
    complexity: 'High',
    skills: ['Unity', 'C#', 'ARKit', 'ARCore'],
    category: 'Mobile Development',
    stars: 129,
    forks: 21
  },
  {
    id: 4,
    title: 'Habit Tracking Social App',
    description: 'Create a mobile app that helps users track habits and connect with friends for accountability and motivation.',
    complexity: 'Medium',
    skills: ['React Native', 'Firebase', 'Node.js'],
    category: 'Mobile Development',
    stars: 87,
    forks: 15
  },
  {
    id: 5,
    title: 'Real-time Code Collaboration Tool',
    description: 'Build a web-based code editor with real-time collaboration features similar to CodePen or JSFiddle.',
    complexity: 'Medium',
    skills: ['JavaScript', 'WebSockets', 'React', 'Node.js'],
    category: 'Web Development',
    stars: 156,
    forks: 42
  },
  {
    id: 6,
    title: 'Smart Home Energy Monitor',
    description: 'Develop an IoT system that monitors and analyzes home energy usage, providing insights and recommendations for efficiency.',
    complexity: 'High',
    skills: ['IoT', 'Python', 'Data Visualization', 'Machine Learning'],
    category: 'IoT',
    stars: 112,
    forks: 19
  }
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(PROJECTS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedComplexity, setSelectedComplexity] = useState('All');
  const [isGeneratingIdea, setIsGeneratingIdea] = useState(false);

  // Categories derived from data
  const categories = ['All', 'Web Development', 'Mobile Development', 'Blockchain', 'IoT', 'AI/ML', 'Data Science'];
  const complexityLevels = ['All', 'Low', 'Medium', 'High'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'All' || project.complexity === selectedComplexity;
    
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  const handleGenerateIdea = () => {
    setIsGeneratingIdea(true);
    
    // Simulate API call for generating a new project idea
    setTimeout(() => {
      const newIdea = {
        id: projects.length + 1,
        title: 'Sustainable Food Delivery Network',
        description: 'Create a platform connecting local farmers with consumers to reduce food miles and support sustainable agriculture practices.',
        complexity: 'Medium',
        skills: ['React', 'Node.js', 'Google Maps API', 'MongoDB'],
        category: 'Web Development',
        stars: 0,
        forks: 0
      };
      
      setProjects([newIdea, ...projects]);
      setIsGeneratingIdea(false);
    }, 2000);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Project Ideas</h1>
          <p className="text-gray-400 mb-8">
            Find inspiration for your next project or generate new ideas with our AI assistant.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={handleGenerateIdea}
            isLoading={isGeneratingIdea}
            leftIcon={<RefreshCw className={`h-5 w-5 ${isGeneratingIdea ? '' : 'animate-spin-slow'}`} />}
          >
            Generate New Project Idea
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
                placeholder="Search projects by title, description or skills..."
                className="input pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select
                  className="input appearance-none pr-10"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative">
                <select
                  className="input appearance-none pr-10"
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                >
                  {complexityLevels.map(level => (
                    <option key={level} value={level}>{level} Complexity</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <Card 
                key={project.id} 
                hoverEffect 
                className="flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${project.complexity === 'Low' ? 'bg-green-500/20 text-green-400' : 
                      project.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                      'bg-red-500/20 text-red-400'}`}
                  >
                    {project.complexity} Complexity
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm text-gray-300 mb-2">Skills Required:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-400 text-sm">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {project.stars}
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                      <GitBranch className="h-4 w-4 mr-1 text-gray-400" />
                      {project.forks}
                    </span>
                  </div>
                  <Button 
                    variant="ghost"
                    size="sm"
                    rightIcon={<ExternalLink className="h-4 w-4" />}
                  >
                    Details
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No projects match your search criteria.</p>
              <Button 
                variant="secondary" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedComplexity('All');
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

export default ProjectsPage;