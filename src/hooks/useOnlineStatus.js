import { useState, useEffect } from 'react';

export default function useOnlineStatus() {
  const [status, setStatus] = useState('online');

  // 添加事件监听
  useEffect(() => {
    const handleOnline = () => {
      setStatus('online');
    }
    const handleOffline = () => {
      setStatus('offline');
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);

  return status === 'online';
}