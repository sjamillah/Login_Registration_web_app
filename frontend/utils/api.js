export const signup = async (username, email, password) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  export const signin = async (usernameOrEmail, password) => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usernameOrEmail, password })
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };  