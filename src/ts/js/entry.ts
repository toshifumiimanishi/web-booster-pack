import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { mq, handleWindowChange } from './modules/_breakpoints';

handleWindowChange(mq);
mq.addListener(handleWindowChange);
