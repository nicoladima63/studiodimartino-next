declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Place?: any;
        };
      };
    };
  }
}

export {};
