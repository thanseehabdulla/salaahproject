import React, {Component} from 'react';
import {
    View,
    WebView,
    BackHandler,
    Platform,
    StyleSheet, Text, ListView
} from 'react-native';

class WebViewExample extends Component {


    webView = {
        canGoBack: false,
        ref: null,
    }


    onAndroidBackPress = () => {

        if (this.webView.canGoBack && this.webView.ref) {
            this.webView.ref.goBack();
            return true;
        }
        const {navigate} = this.props.navigation;
        navigate('Settings')
        return false;
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress');
        }
    }


    injectjs() {

        document.querySelector('.maintitle').style.backgroundColor = 'red';
    }

    render() {

        let jsCode = `
          document.querySelector('#sp-bottom').style.display = 'none';
          document.querySelector('#sp-footer').style.display = 'none';
          document.querySelector('#sp-header').style.display = 'none';
          document.querySelector('#sp-top-bar').style.display = 'none';
          document.querySelector('iframe').style.display = 'none';
          document.querySelector('.s2s_supra_contenedor ').style.display = 'none';
       
`;

        let jsCode2 = `
       
        
         document.querySelector('#container').style.display = 'none';
       
`;

        let jsCodeQ = `
          document.querySelector('footer').style.display = 'none';
          document.querySelector('button.navbar-bar.collapsed').style.display = 'none';
       
`;

        return (
            <View style={styles.container}>


                {this.props.name === "hadith" && <WebView
                    ref={(webView) => {
                        this.webView.ref = webView;
                    }}
                    onNavigationStateChange={(navState) => {
                        this.webView.canGoBack = navState.canGoBack;
                    }}
                    injectedJavaScript={jsCode}
                    Geolocation={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.props.url}}
                    style={{marginTop: 0}}
                />}

                {this.props.name === "story" && <WebView
                    ref={(webView) => {
                        this.webView.ref = webView;
                    }}
                    onNavigationStateChange={(navState) => {
                        this.webView.canGoBack = navState.canGoBack;
                    }}
                    injectedJavaScript={jsCode2}
                    Geolocation={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.props.url}}
                    style={{marginTop: 0}}
                />}


                {/*<Text> Copyright @ ATS Studios </Text>*/}
            </View>
        );
    }
}

export default WebViewExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    }
})