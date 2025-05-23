import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Users, Lightbulb, Zap, GitBranch, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage = () => {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateHero(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent-900/40 via-gray-950 to-gray-950"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 transition-all duration-1000 transform ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Connect, Code &</span>
                <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-transparent bg-clip-text">Create Together</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                ProjectPulse connects developers, generates project ideas with AI, and provides real-time collaborative coding environments to bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                  >
                    Explore Projects
                  </Button>
                </Link>
                <Link to="/teams">
                  <Button 
                    variant="secondary" 
                    size="lg"
                  >
                    Find a Team
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className={`md:w-1/2 transition-all duration-1000 delay-300 transform ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl blur-md"></div>
                <div className="code-editor relative">
                  <div className="bg-gray-800 p-2 flex items-center space-x-2 border-b border-gray-700">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-400">collaborative-session.tsx</div>
                  </div>
                  <pre className="bg-gray-900 p-4 text-sm text-gray-300 overflow-auto">
                    <code>
{`import React, { useState } from 'react';
import { CollaborationProvider } from './context';

function ProjectPulse() {
  const [connected, setConnected] = useState(false);
  
  return (
    <CollaborationProvider>
      <div className="real-time-editor">
        <header>
          <h1>Welcome to ProjectPulse!</h1>
          <p>Collaborate in real-time with your team</p>
        </header>
        
        {/* Cursor positions of other users */}
        <div className="cursor user1" style={{ top: 120, left: 55 }}>
          <div className="cursor-flag">Jane</div>
        </div>
        
        {/* More collaborative features... */}
      </div>
    </CollaborationProvider>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Empower Your Development Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ProjectPulse provides all the tools you need to find inspiration, connect with other developers, and bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hoverEffect neonBorder="primary" className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Project Ideas</h3>
              <p className="text-gray-400 mb-6">
                Get personalized project suggestions based on your skills, interests, and current tech trends.
              </p>
              <Link to="/projects" className="text-primary-500 hover:text-primary-400 flex items-center mt-auto">
                <span>Explore Ideas</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Card>

            <Card hoverEffect neonBorder="secondary" className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-secondary-500/20 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Formation</h3>
              <p className="text-gray-400 mb-6">
                Connect with like-minded developers, form teams based on complementary skills and shared interests.
              </p>
              <Link to="/teams" className="text-secondary-500 hover:text-secondary-400 flex items-center mt-auto">
                <span>Find Teams</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Card>

            <Card hoverEffect neonBorder="accent" className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Collaboration</h3>
              <p className="text-gray-400 mb-6">
                Code together in real-time with an integrated development environment and communication tools.
              </p>
              <Link to="/code-room" className="text-accent-500 hover:text-accent-400 flex items-center mt-auto">
                <span>Try Code Room</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How ProjectPulse Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From idea to implementation, we guide you through the entire development process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-primary-500 flex items-center justify-center mb-6 z-10">
                  <span className="text-xl font-bold text-primary-500">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Generate Ideas</h3>
                <p className="text-gray-400">
                  Use our AI-powered system to discover project ideas tailored to your skills and interests.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent transform -translate-x-8"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-primary-500 flex items-center justify-center mb-6 z-10">
                  <span className="text-xl font-bold text-primary-500">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Form Your Team</h3>
                <p className="text-gray-400">
                  Connect with developers who have complementary skills to bring your project to life.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent transform -translate-x-8"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-primary-500 flex items-center justify-center mb-6 z-10">
                  <span className="text-xl font-bold text-primary-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborate Live</h3>
                <p className="text-gray-400">
                  Use our real-time code editor to work together seamlessly with your team members.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent transform -translate-x-8"></div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-primary-500 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary-500">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ship Your Project</h3>
              <p className="text-gray-400">
                Deploy your completed project and share it with the world through your ProjectPulse profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Join ProjectPulse today and connect with a community of developers eager to collaborate on exciting projects.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  leftIcon={<Zap className="h-5 w-5" />}
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  leftIcon={<GitBranch className="h-5 w-5" />}
                >
                  Browse Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;