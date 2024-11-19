import { createContext } from 'react';
import { StateRatedValueType } from './types';

export const StateContextRated = createContext<StateRatedValueType>({} as StateRatedValueType);
