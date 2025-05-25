import React, { useState } from 'react';
import { Post } from 'src/types/content';
import { formatDistanceToNow } from 'date-fns';
import { HeartIcon, ChatBubbleLeftIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { ContentService } from 'src/services/contentService';
import { TipModal } from './TipModal';
import { Button } from 'src/components/common/button';

interface PostCardProps {
  post: Post;
  onInteraction?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onInteraction }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [showTipModal, setShowTipModal] = useState(false);
  const [tipsAmount, setTipsAmount] = useState(post.tipsAmount);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await ContentService.unlikePost(post.id);
        setLikesCount((prev) => prev - 1);
      } else {
        await ContentService.likePost(post.id);
        setLikesCount((prev) => prev + 1);
      }
      setIsLiked(!isLiked);
      onInteraction?.();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleTipSuccess = () => {
    setTipsAmount((prev) => prev + 1);
    onInteraction?.();
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      {/* Creator Info */}
      <div className="p-4 flex items-center space-x-3">
        <img
          src={post.creator.avatarUrl}
          alt={post.creator.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{post.creator.username}</h3>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>

      {/* Media Content */}
      <div className="relative">
        {post.media.map((media, index) => (
          <div key={media.id} className="aspect-video">
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={`Post ${index + 1}`}
                className={`w-full h-full object-cover ${
                  post.isBlurred ? 'blur-lg' : ''
                }`}
              />
            ) : (
              <video
                src={media.url}
                controls
                poster={media.thumbnailUrl}
                className={`w-full h-full object-cover ${
                  post.isBlurred ? 'blur-lg' : ''
                }`}
              />
            )}
          </div>
        ))}
        {post.isPremium && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white font-semibold">Premium Content</span>
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="p-4">
        <p className="text-gray-800">{post.caption}</p>
      </div>

      {/* Interaction Buttons */}
      <div className="px-4 pb-4 flex items-center space-x-6">
        <Button
          onClick={handleLike}
          variant="secondary"
          className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
        >
          {isLiked ? (
            <HeartIconSolid className="w-6 h-6" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}
          <span>{likesCount}</span>
        </Button>

        <Button
          variant="secondary"
          className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
        >
          <ChatBubbleLeftIcon className="w-6 h-6" />
          <span>{post.commentsCount}</span>
        </Button>

        <Button
          onClick={() => setShowTipModal(true)}
          variant="secondary"
          className="flex items-center space-x-1 text-gray-600 hover:text-green-500"
        >
          <BanknotesIcon className="w-6 h-6" />
          <span>${tipsAmount}</span>
        </Button>
      </div>

      {/* Tip Modal */}
      {showTipModal && (
        <TipModal
          postId={post.id}
          creatorName={post.creator.username}
          onClose={() => setShowTipModal(false)}
          onSuccess={handleTipSuccess}
        />
      )}
    </div>
  );
}; 