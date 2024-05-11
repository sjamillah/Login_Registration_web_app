export const socialSignIn = async (provider) => {
    try {
      let authProvider;
      if (provider === 'Google') {
        // Initialize Google Auth provider
        authProvider = new firebase.auth.GoogleAuthProvider();
        // Add 'email' and 'profile' scopes to get user's email and profile information
        authProvider.addScope('email');
        authProvider.addScope('profile');
      } else {
        throw new Error('Unsupported provider');
      }
  
      // Sign in with Google provider using Firebase Auth
      const result = await firebase.auth().signInWithPopup(authProvider);
  
      // Handle the result, which contains user information
      const { user } = result;
      return user; // Return user information
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };  