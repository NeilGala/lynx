/**
 * Main App Component
 * Root component managing application routing and state
 */

import React, { useState } from 'react';
import { Layout, AuthScreen } from './components/features';
import { 
  SearchPage, 
  RequestsPage, 
  ChatPage, 
  LeaderboardPage, 
  ProfilePage, 
  NotificationsPage, 
  LandingPage 
} from './pages';

type AppView = 'landing' | 'auth' | 'app';
type TabId = 'search' | 'requests' | 'chats' | 'leaderboard' | 'profile' | 'notifications';

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [activeTab, setActiveTab] = useState<TabId>('search');
  const [viewingUser, setViewingUser] = useState<any>(null);

  /**
   * Handles user profile viewing
   */
  const handleUserClick = (user: any) => {
    setViewingUser(user);
    setActiveTab('profile');
  };

  /**
   * Handles tab changes
   */
  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    setViewingUser(null);
  };

  /**
   * Renders the appropriate content based on active tab
   */
  const renderContent = () => {
    // Show user profile if viewing someone's profile
    if (activeTab === 'profile' && viewingUser) {
      return <ProfilePage user={viewingUser} isViewOnly={true} />;
    }

    // Render page based on active tab
    switch (activeTab) {
      case 'search':
        return <SearchPage onUserClick={handleUserClick} />;
      case 'requests':
        return <RequestsPage />;
      case 'chats':
        return <ChatPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'profile':
        return <ProfilePage />;
      case 'notifications':
        return <NotificationsPage />;
      default:
        return <SearchPage onUserClick={handleUserClick} />;
    }
  };

  // Landing Page View
  if (view === 'landing') {
    return <LandingPage onGetStarted={() => setView('auth')} />;
  }

  // Authentication View
  if (view === 'auth') {
    return (
      <AuthScreen 
        onComplete={() => setView('app')} 
        onBack={() => setView('landing')} 
      />
    );
  }

  // Main App View
  return (
    <Layout activeTab={activeTab} setActiveTab={handleTabChange}>
      {renderContent()}
    </Layout>
  );
}
