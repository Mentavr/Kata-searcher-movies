import { clientAxios } from '../../config/apiConfig';

export const apiGuestSession = () => {
  const createGuestSession = async () => {
    try {
      const response = await clientAxios('/3/authentication/guest_session/new');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { createGuestSession };
};
