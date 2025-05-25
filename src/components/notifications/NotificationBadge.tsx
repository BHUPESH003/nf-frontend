import React from 'react';
import { useNotifications } from 'src/context/NotificationContext';
import { useAuth } from 'src/hooks/useAuth';

export const NotificationBadge: React.FC = () => {
  const { unreadCount, isConnected } = useNotifications();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="relative">
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
      {!isConnected && (
        <span className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-500 rounded-full" title="Connecting to notifications..." />
      )}
    </div>
  );
}; 