"use client"
import { useEffect } from 'react';

export default function Home() {
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      if (Notification.permission === 'default') {
        await Notification.requestPermission();
      }
    }
  };

  const sendNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Hello!', {
        body: 'This is a desktop notification from Next.js.',
        icon: '/icon.png', // Add a valid icon file in the public folder
      });
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Desktop Notifications with Next.js</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
}
