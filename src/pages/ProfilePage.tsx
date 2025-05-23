import { useState } from 'react';
import { Edit, Github as GitHub, Twitter, Linkedin, Globe, MapPin, Briefcase, Calendar, Star, Award, PlusCircle, FileCode } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProfilePage = () => {
  const [userData] = useState({
    name: 'Alex Johnson',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    bio: 'Passionate about creating innovative web applications and contributing to open source projects. Specialized in React, Node.js, and cloud technologies.',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'Open to new projects',
    joinDate: 'Joined March 2023',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 65 },
    ],
    experience: [
      { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2020 - Present' },
      { role: 'Web Developer', company: 'Digital Solutions', period: '2018 - 2020' },
    ],
    projects: [
      { 
        name: 'E-commerce Platform', 
        description: 'A modern e-commerce solution with React, Node.js, and Stripe integration.',
        skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        stars: 48
      },
      { 
        name: 'Task Management App', 
        description: 'A collaborative task management tool with real-time updates and team features.',
        skills: ['React', 'Firebase', 'Material UI'],
        stars: 32
      },
      { 
        name: 'Weather Dashboard', 
        description: 'A weather visualization app that displays forecasts and historical data.',
        skills: ['JavaScript', 'D3.js', 'Weather API'],
        stars: 27
      },
    ],
    badges: [
      { name: 'Top Contributor', icon: <Award className="h-5 w-5" />, color: 'from-yellow-500 to-orange-500' },
      { name: 'Team Player', icon: <Star className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500' },
      { name: 'Code Quality', icon: <FileCode className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    ]
  });

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="relative mb-6">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <Edit className="h-4 w-4 text-gray-300" />
              </button>
              
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    src={userData.avatarUrl} 
                    alt={userData.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 border-2 border-gray-700"></div>
                </div>
                
                <h2 className="text-2xl font-bold">{userData.name}</h2>
                <p className="text-gray-400">{userData.title}</p>
                
                <div className="flex items-center mt-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  {userData.location}
                </div>
                
                <div className="mt-4 w-full">
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-400">
                      <Briefcase className="h-4 w-4 inline mr-1" />
                      {userData.availability}
                    </span>
                    <span className="text-sm text-gray-400">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {userData.joinDate}
                    </span>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-300 text-center">{userData.bio}</p>
                
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                    <GitHub className="h-5 w-5 text-gray-300" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-300" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-300" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                    <Globe className="h-5 w-5 text-gray-300" />
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Skills</h3>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Edit className="h-4 w-4 text-gray-300" />
                </button>
              </div>
              
              <div className="space-y-4">
                {userData.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full py-2 flex items-center justify-center text-sm text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add New Skill
              </button>
            </Card>
            
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Experience</h3>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Edit className="h-4 w-4 text-gray-300" />
                </button>
              </div>
              
              <div className="space-y-6">
                {userData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-5 border-l-2 border-gray-700">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary-500"></div>
                    <h4 className="text-base font-medium">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full py-2 flex items-center justify-center text-sm text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Experience
              </button>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Projects</h3>
                <Button 
                  variant="primary" 
                  size="sm" 
                  leftIcon={<PlusCircle className="h-4 w-4" />}
                >
                  New Project
                </Button>
              </div>
              
              <div className="space-y-6">
                {userData.projects.map((project, index) => (
                  <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex justify-between">
                      <h4 className="text-lg font-medium">{project.name}</h4>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-400">{project.stars}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Achievements</h3>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Edit className="h-4 w-4 text-gray-300" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userData.badges.map((badge, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center mb-2`}>
                      {badge.icon}
                    </div>
                    <span className="text-sm font-medium">{badge.name}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Activity</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 rounded-full p-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">You</span> {' '}
                      starred project {' '}
                      <span className="text-primary-400">Weather Dashboard</span>
                    </p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 rounded-full p-2">
                    <FileCode className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">You</span> {' '}
                      made 5 commits to {' '}
                      <span className="text-primary-400">E-commerce Platform</span>
                    </p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 rounded-full p-2">
                    <Award className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">You</span> {' '}
                      earned the {' '}
                      <span className="text-primary-400">Top Contributor</span> {' '}
                      badge
                    </p>
                    <p className="text-xs text-gray-500">1 week ago</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full py-2 text-sm text-gray-400 hover:text-gray-300">
                View All Activity
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;