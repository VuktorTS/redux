import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

const enhanser = devToolsEnhancer();
export const store = createStore(rootReducer, enhanser);
