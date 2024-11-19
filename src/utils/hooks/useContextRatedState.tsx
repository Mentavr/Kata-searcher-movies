import { useContext } from 'react';
import { StateContextRated } from '../../context/StateContextRated';

export const useContextRatedState = () => {
  const context = useContext(StateContextRated);
  return context;
};
