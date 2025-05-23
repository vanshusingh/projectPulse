import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Save, Play, Share, Users, MessageSquare, X, ChevronRight, Settings, Copy } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CodeRoomPage = () => {
  const [code, setCode] = useState(`import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-8">Collaborative Coding</h1>
      <p className="text-xl text-gray-300 mb-4">Count: {count}</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;`);

  const [activeTab, setActiveTab] = useState('code');
  const [chatMessages, setChatMessages] = useState([
    { user: 'Sarah', message: 'I\'ve updated the button styles, can you check if they look good?', time: '10:32 AM' },
    { user: 'Mike', message: 'Looks great! I\'m working on the state management now.', time: '10:34 AM' },
    { user: 'You', message: 'Should we add more components or focus on this one first?', time: '10:35 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  const [onlineUsers] = useState([
    { id: 1, name: 'Sarah', color: '#00FFAA', position: { line: 4, ch: 12 } },
    { id: 2, name: 'Mike', color: '#FF00AA', position: { line: 10, ch: 8 } },
    { id: 3, name: 'You', color: '#7850FF', position: { line: 15, ch: 2 } },
  ]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { user: 'You', message: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="pt-16 pb-0 flex flex-col h-screen">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <div className="py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Live Code Room</h1>
              <p className="text-gray-400">Collaborate in real-time with your team</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="secondary" 
                size="sm"
                leftIcon={<Share className="h-4 w-4" />}
              >
                Share Room
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                leftIcon={<Save className="h-4 w-4" />}
              >
                Save Project
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 flex-grow overflow-hidden">
          {/* Main Code Editor */}
          <div className="flex-grow flex flex-col min-h-0 lg:max-w-[calc(100%-350px)]">
            <div className="bg-gray-800 rounded-t-xl p-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeTab === 'code' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('code')}
                >
                  App.tsx
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeTab === 'styles' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('styles')}
                >
                  styles.css
                </button>
                <button className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-700/50 rounded-md">
                  <span className="flex items-center">
                    <span>+</span>
                  </span>
                </button>
              </div>
              <div className="ml-auto flex space-x-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-300 rounded-md hover:bg-gray-700">
                  <Settings className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-300 rounded-md hover:bg-gray-700">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex-grow overflow-hidden flex flex-col bg-gray-900 rounded-b-xl border border-gray-700">
              <div className="relative flex-grow overflow-hidden">
                {/* Code editor with line numbers */}
                <div className="absolute inset-0 flex text-sm font-mono">
                  <div className="py-4 pr-4 text-right bg-gray-800 text-gray-500 select-none w-12">
                    {code.split('\n').map((_, i) => (
                      <div key={i} className="px-2">{i + 1}</div>
                    ))}
                  </div>
                  
                  <div className="relative flex-grow overflow-auto">
                    <SyntaxHighlighter
                      language="jsx"
                      style={atomOneDark}
                      customStyle={{
                        margin: 0,
                        padding: '16px',
                        backgroundColor: 'transparent',
                        height: '100%',
                        width: '100%',
                        overflow: 'visible',
                      }}
                    >
                      {code}
                    </SyntaxHighlighter>
                    
                    <textarea
                      value={code}
                      onChange={handleCodeChange}
                      className="absolute inset-0 bg-transparent text-transparent caret-white resize-none outline-none font-mono p-4 overflow-auto"
                    />
                    
                    {/* Simulated user cursors */}
                    {onlineUsers.map(user => (
                      <div 
                        key={user.id} 
                        className="absolute pointer-events-none" 
                        style={{ 
                          top: `${user.position.line * 24}px`, // Approximate line height
                          left: `${user.position.ch * 8}px`, // Approximate character width 
                        }}
                      >
                        <div 
                          className="w-[2px] h-5 animate-pulse" 
                          style={{ backgroundColor: user.color }}
                        ></div>
                        <div 
                          className="absolute top-0 left-0 transform -translate-y-full px-2 py-1 rounded text-xs text-white"
                          style={{ backgroundColor: user.color }}
                        >
                          {user.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-3 border-t border-gray-700 flex space-x-2">
                <Button 
                  variant="primary" 
                  size="sm"
                  leftIcon={<Play className="h-4 w-4" />}
                >
                  Run
                </Button>
                <span className="text-sm text-gray-400 flex items-center ml-4">Auto-saving...</span>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Chat & Users */}
          <div className="w-full lg:w-[350px] flex flex-col">
            <div className="bg-gray-800 rounded-t-xl p-3 flex items-center justify-between">
              <div className="flex space-x-4">
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeTab === 'chat' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('chat')}
                >
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  Chat
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeTab === 'users' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('users')}
                >
                  <Users className="h-4 w-4 inline mr-1" />
                  Users
                </button>
              </div>
              <button className="p-1.5 text-gray-400 hover:text-gray-300 rounded-md hover:bg-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex-grow overflow-hidden flex flex-col bg-gray-900 rounded-b-xl border border-gray-700">
              <div className="flex-grow overflow-y-auto p-4">
                {/* Chat messages */}
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center mb-1">
                        <span 
                          className="font-semibold text-sm"
                          style={{ 
                            color: msg.user === 'Sarah' ? '#00FFAA' : 
                                  msg.user === 'Mike' ? '#FF00AA' : '#7850FF' 
                          }}
                        >
                          {msg.user}
                        </span>
                        <span className="ml-auto text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <div className={`p-3 rounded-lg text-sm ${
                        msg.user === 'You' ? 'bg-accent-500/20 text-white' : 'bg-gray-800 text-gray-300'
                      }`}>
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-3 border-t border-gray-700">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="input text-sm flex-grow"
                  />
                  <Button 
                    type="submit"
                    variant="primary" 
                    size="sm"
                    rightIcon={<ChevronRight className="h-4 w-4" />}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Preview panel (hidden on smaller screens) */}
        <div className="mt-4 rounded-xl border border-gray-700 bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Preview</h3>
            <p className="text-gray-400 text-sm">Live preview of your application</p>
          </div>
          <div className="mt-2 md:mt-0">
            <Button
              variant="secondary"
              size="sm"
            >
              Open in New Tab
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRoomPage;