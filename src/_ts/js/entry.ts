import '@babel/polyfill';
import { mq, handleWindowChange } from './modules/_breakpoints';

handleWindowChange(mq);
mq.addListener(handleWindowChange);
