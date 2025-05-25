import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentService } from 'src/services/contentService';
import { Button } from 'src/components/common/button';
import { Input } from 'src/components/common/input';
import { MediaUpload, MediaItem } from 'src/components/common/MediaUpload';

export const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [caption, setCaption] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMediaAdd = (newMedia: MediaItem[]) => {
    setMedia(prev => [...prev, ...newMedia]);
  };

  const handleMediaRemove = (index: number) => {
    setMedia(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].previewUrl);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (media.length === 0) {
      setError('Please add at least one photo or video');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('isPremium', String(isPremium));
      formData.append('isBlurred', String(isBlurred));
      
      media.forEach((item) => {
        formData.append(`media`, item.file);
        formData.append(`mediaTypes`, item.type);
      });

      await ContentService.createPost(formData);
      navigate('/feed');
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Media Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photos/Videos
          </label>
          <MediaUpload
            media={media}
            onMediaAdd={handleMediaAdd}
            onMediaRemove={handleMediaRemove}
            maxItems={10}
            className="mb-4"
          />
        </div>

        {/* Caption */}
        <Input
          label="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          as="textarea"
          rows={4}
        />

        {/* Premium Content Toggle */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isPremium"
            checked={isPremium}
            onChange={(e) => setIsPremium(e.target.checked)}
            className="rounded text-blue-600"
          />
          <label htmlFor="isPremium" className="text-sm font-medium text-gray-700">
            Premium Content
          </label>
        </div>

        {/* Blur Toggle */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isBlurred"
            checked={isBlurred}
            onChange={(e) => setIsBlurred(e.target.checked)}
            className="rounded text-blue-600"
          />
          <label htmlFor="isBlurred" className="text-sm font-medium text-gray-700">
            Blur Preview
          </label>
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <div className="flex justify-end space-x-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate('/feed')}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={loading || media.length === 0}
          >
            {loading ? 'Creating...' : 'Create Post'}
          </Button>
        </div>
      </form>
    </div>
  );
}; 