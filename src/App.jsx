import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthListener } from './hooks/useAuth';
import { useTasksListener } from './hooks/useTasks';
import { useNotifications } from './hooks/useNotifications';
import { useAuthStore } from './store/authStore';
import LoadingSpinner from './components/LoadingSpinner';
import UpdatePrompt from './components/UpdatePrompt';
import Login from './pages/Login';

const Home = lazy(() => import('./pages/Home'));
const Calendar = lazy(() => import('./pages/Calendar'));
const TaskList = lazy(() => import('./pages/TaskList'));
const TaskForm = lazy(() => import('./pages/TaskForm'));
const History = lazy(() => import('./pages/History'));
const Settings = lazy(() => import('./pages/Settings'));

function AppContent() {
  const { currentUser, familyId, isLoading, loadError } = useAuthStore();
  useTasksListener(familyId);
  useNotifications();

  if (loadError) {
    return (
      <LoadingSpinner
        fullScreen
        error={loadError}
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (isLoading) return <LoadingSpinner fullScreen />;
  if (!currentUser) return <Login />;

  return (
    <Suspense fallback={<LoadingSpinner fullScreen />}>
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
    </Suspense>
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
