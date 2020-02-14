import {Navigation as _Navigation} from 'react-native-navigation';
import {store} from './ReduxStore';
import {Provider} from 'react-redux';
import {PAGES} from '../constants/PAGES';
import {Platform} from 'react-native';

export function setRoot() {
  /**
   * Form pages
   *
   *
   */
  _Navigation.registerComponentWithRedux(
    PAGES.FROM_STEP_1,
    function() {
      const Step1 = require('../pages/Form/Step_1').default;
      return Step1;
    },
    Provider,
    store,
  );
  _Navigation.registerComponentWithRedux(
      PAGES.FROM_STEP_2,
      function() {
        const Step2 = require('../pages/Form/Step_2').default;
        return Step2;
      },
      Provider,
      store,
  );
  _Navigation.registerComponentWithRedux(
      PAGES.FROM_STEP_3,
      function() {
        const Step3 = require('../pages/Form/Step_3').default;
        return Step3;
      },
      Provider,
      store,
  );

  /**
   *
   *
   *   default root
   *
   *
   */

  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    topBar: {
      visible: false,
      /**
       *
       * drawBehind: Platform.OS === "android"
       * fixes android topBar hidden issue
       * see github issue
       *
       */
      drawBehind: Platform.OS === 'android',
    },
    statusBar: {
      style: 'light',
      backgroundColor:'#4a91ff'
    },
    animations: {
      setRoot: {
        /**
         *
         * waitForRender: true,
         * fixes white screen befor rendering new screen
         * see github issue
         *
         *
         */
        waitForRender: true,
        alpha: {
          /**
           *
           *  alpha => opacity animation
           *
           *  we want very quick transition
           *
           *
           *
           */
          duration: 0,
          from: 0,
          to: 1,
          startDelay: 0,
        },
      },
      push: {
        /**
         *
         * waitForRender: true,
         * fixes white screen befor rendering new screen
         * see github issue
         *
         *
         */
        waitForRender: true,
        content: {
          alpha: {
            /**
             *
             *  alpha => opacity animation
             *
             *  we want very quick transition
             *
             *
             *
             */
            duration: 0,
            from: 0,
            to: 1,
            startDelay: 0,
          },
        },
      },
      pop: {
        /**
         *
         * waitForRender: true,
         * fixes white screen befor rendering new screen
         * see github issue
         *
         *
         */
        waitForRender: true,
        content: {
          alpha: {
            /**
             *
             *  alpha => opacity animation
             *
             *  we want very quick transition
             *
             *
             *
             */
            duration: 0,
            from: 1,
            to: 0,
            startDelay: 0,
          },
        },
      },
    },
  });

  /**
   *
   * setting initial screen to Loading
   *
   * in this screen,we decide to go to MainScreen or SignIn based on redux persisted data
   *
   *
   *
   */
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: PAGES.FROM_STEP_1,
              id: PAGES.FROM_STEP_1,
              options: {
                layout: {
                  orientation: ['portrait'],
                },
              },
            },
          },
        ],
      },
    },
  });
}

export const Navigation = _Navigation;
