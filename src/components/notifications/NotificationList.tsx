import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from 'src/context/NotificationContext';
import { Notification, NotificationType } from 'src/types/notification';
import { formatDistanceToNow } from 'date-fns';
import { Avatar } from 'src/components/common/Avatar';

export const NotificationList: React.FC = () => {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();
  const navigate = useNavigate();

  const handleNotificationClick = async (notificationId: string, actionUrl?: string) => {
    await markAsRead(notificationId);
    if (actionUrl) {
      navigate(actionUrl);
    }
  };

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case 'NEW_SUBSCRIBER':
        return '👥';
      case 'NEW_LIKE':
        return '❤️';
      case 'NEW_COMMENT':
        return '💬';
      case 'NEW_MESSAGE':
        return '✉️';
      case 'SUBSCRIPTION_EXPIRED':
        return '⚠️';
      case 'PAYOUT_PROCESSED':
        return '💰';
      case 'POST_REPORTED':
        return '🚫';
      case 'ACCOUNT_VERIFIED':
        return '✅';
      default:
        return '📢';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <button
          onClick={() => markAllAsRead()}
          className="text-blue-500 hover:text-blue-600"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification: Notification) => (
          <div
            key={notification.id}
            onClick={() => handleNotificationClick(notification.id, notification.data.actionUrl)}
            className={`p-4 rounded-lg border cursor-pointer transition-colors ${
              notification.read
                ? 'bg-white'
                : 'bg-blue-50 hover:bg-blue-100'
            }`}
          >
            <div className="flex items-start space-x-3">
              {notification.data.triggeredBy ? (
                <Avatar
                  src={notification.data.triggeredBy.avatarUrl}
                  alt={notification.data.triggeredBy.username}
                  size="md"
                />
              ) : (
                <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
              )}
              <div className="flex-1">
                <p className="text-gray-900">{notification.data.message}</p>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(notification.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center text-gray-500">
            No notifications yet
          </div>
        )}
      </div>
    </div>
  );
}; 