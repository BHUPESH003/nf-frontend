import React from 'react';
import { NotificationList } from 'src/components/notifications/NotificationList';

export const NotificationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NotificationList />
    </div>
  );
}; 