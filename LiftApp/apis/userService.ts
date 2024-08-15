// src/services/userService.ts

const API_URL = 'http:'; // Replace with your actual API URL

interface UserData {
  username: string;
  // Add other user properties as needed
}

export async function fetchUserData(): Promise<UserData | null> {
  const token = localStorage.getItem('userToken');
  
  try {
    const response = await fetch(`${API_URL}/auth/user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData: { user: UserData } = await response.json();
    return userData.user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

// You can add other user-related API functions here
export async function updateUserProfile(userData: Partial<UserData>): Promise<boolean> {
  // Implementation for updating user profile
  return true; // Return success status
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<boolean> {
  // Implementation for changing password
  return true; // Return success status
}