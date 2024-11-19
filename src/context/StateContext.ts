import { createContext } from 'react';
import { StateValueType } from './types';

export const StateContext = createContext<StateValueType>({} as StateValueType);
