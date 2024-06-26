export interface IPhoto {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    username: string;
    name: string;
    portfolio_url: string;
  };
}
