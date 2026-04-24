import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthListener } from './hooks/useAuth';
import { useTasksListener } from './hooks/useTasks';
import { useNotifications } from './hooks/useNotifications';
import { useAuthStore } from './store/authStore';
import LoadingSpinner from './components/LoadingSpinner';
import UpdatePrompt from './components/UpdatePrompt';
import Login from './pages/Login';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';
import History from './pages/History';
import Settings from './pages/Settings';

function AppContent() {
  const { currentUser, familyId, isLoading } = useAuthStore();
  useTasksListener(familyId);
  useNotifications();

  if (isLoading) return <LoadingSpinner fullScreen />;
  if (!currentUser) return <Login />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/tasks/new" element={<TaskForm />} />
      <Route path="/tasks/:id/edit" element={<TaskForm />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  useAuthListener();
  return (
    <HashRouter>
      <AppContent />
      <UpdatePrompt />
    </HashRouter>
  );
}
