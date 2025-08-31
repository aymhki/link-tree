declare global {
  interface Window {
    Gradient: new (options: {
      canvas: string;
      colors: string[];
      static?: boolean;
      wireframe?: boolean;
      density?: [number, number];
      angle?: number;
      amplitude?: number;
    }) => any;
  }
}

export {};
