import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const existingScript = document.getElementById('botpress-webchat-script');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'botpress-webchat-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: 'Chat with bot',
        botConversationDescription: 'This chatbot was built surprisingly fast with Botpress',
        botId: 'c21cb412-815e-4401-9749-1877b129aa27',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'c21cb412-815e-4401-9749-1877b129aa27',
        webhookId: 'd4b24c42-c5e3-434f-8cae-92eae4238a62',
        lazySocket: true,
        themeName: 'prism',
        frontendVersion: 'v1',
        showPoweredBy: true,
        theme: 'prism',
        themeColor: '#2563eb',
      });
    };

  }, []);

  return <></>;
};

export default Chatbot;
