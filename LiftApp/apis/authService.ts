

export const signUp = async (
    username: string,
    email: string,
    password: string,
    lastName: string,
    firstName: string
  ): Promise<string | null> => {
    try {
      const response = await fetch('http://192.168.40.79:2024/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          lastName,
          firstName,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.token;
      } else {
        console.error('Signup failed:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error during signup:', error);
      return null;
    }
  };
  