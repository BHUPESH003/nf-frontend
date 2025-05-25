import React, { createContext, useContext, useEffect, useState } from 'react';
import { Notification } from 'src/types/notification';
import { api } from 'src/services/api';
import { useAuth } from 'src/hooks/useAuth';

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (notificationId: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  isConnected: boolean;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRY_ATTEMPTS = 3;

  useEffect(() => {
    let ws: WebSocket | null = null;
    let reconnectTimeout: NodeJS.Timeout;

    const connectWebSocket = () => {
      if (!user || retryCount >= MAX_RETRY_ATTEMPTS) return;

      ws = new WebSocket(import.meta.env.VITE_WS_URL || 'ws://localhost:4000');
      
      ws.onopen = () => {
        setIsConnected(true);
        setRetryCount(0);
        // Send authentication message after connection is established
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({
            type: 'AUTH',
            token: localStorage.getItem('accessToken')
          }));
        }
      };

      ws.onmessage = (event) => {
        const notification = JSON.parse(event.data);
        if (notification.type === 'NOTIFICATION') {
          setNotifications(prev => [notification.data, ...prev]);
          setUnreadCount(prev => prev + 1);
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        // Only attempt reconnection if we haven't exceeded max retries
        if (retryCount < MAX_RETRY_ATTEMPTS) {
          reconnectTimeout = setTimeout(() => {
            setRetryCount(prev => prev + 1);
            connectWebSocket();
          }, 5000); // Wait 5 seconds before reconnecting
        }
      };

      ws.onerror = () => {
        ws?.close();
      };

      setSocket(ws);
    };

    // Only attempt connection if user is logged in
    if (user) {
      connectWebSocket();
      loadNotifications();
    } else {
      // Reset state when user logs out
      setNotifications([]);
      setUnreadCount(0);
      setIsConnected(false);
      setRetryCount(0);
    }

    return () => {
      ws?.close();
      clearTimeout(reconnectTimeout);
    };
  }, [user, retryCount]);

  const loadNotifications = async () => {
    if (!user) return;

    try {
      const response = await api.get('/notifications');
      setNotifications(response.data.data.notifications);
      setUnreadCount(response.data.data.unreadCount);
    } catch (error) {
      console.error('Failed to load notifications:', error);
      // Don't throw error - just log it
    }
  };

  const markAsRead = async (notificationId: string) => {
    if (!user) return;

    try {
      await api.put(`/notifications/${notificationId}/read`);
      setNotifications(prev =>
        prev.map(notification =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    if (!user) return;

    try {
      await api.put('/notifications/read-all');
      setNotifications(prev =>
        prev.map(notification => ({ ...notification, read: true }))
      );
      setUnreadCount(0);
    } catch (error) {
      console.error('Failed to mark all notifications as read:', error);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        isConnected
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}; 