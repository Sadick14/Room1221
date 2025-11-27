export type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
};

export type Language = 'en' | 'tw' | 'ee' | 'ga';
