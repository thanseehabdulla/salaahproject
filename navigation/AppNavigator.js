import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WebViewExample from './../components/webview/webview'
import App from './../App'
import ImageSldier from "../components/webview/imageSlider";

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Profile: { screen: WebViewExample },
    Dua: { screen: ImageSldier },

});