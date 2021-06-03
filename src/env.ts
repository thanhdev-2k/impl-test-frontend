export interface ENV {
  apiBaseUrl: string;
}

const env: ENV = {
  apiBaseUrl: process.env.REACT_APP_BASE_API_URL || '',
};

export default env;
