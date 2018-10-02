import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import WebViewExample from "../components/webview/webview";

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Stories',
    };

    render() {

        const url = "https://www.youtube.com/channel/UCvWyP-vFhlS1-XENpD6w68A";
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
                {/*<ExpoLinksView />*/}


                <WebViewExample url={url} name="story" />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
