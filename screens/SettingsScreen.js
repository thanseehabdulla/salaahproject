import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {FlatList, ListView, Navigator, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import WebViewExample from "../components/webview/webview";

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Hadith',
    };

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{name: 'ISLAMIC TIMINGS', url: 'http://www.muslimpro.com/'}, {
                name: 'QURAN',
                url: 'https://quran.com/'
            }, {name: 'HADITH', url: 'http://hadithcollection.com/shama-iltirmidhi.html'}

            ]),
        };
    }

    render() {
        const url = "http://hadithcollection.com/shama-iltirmidhi.html"
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        // return <ExpoConfigView />;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                {/*<StatusBar*/}
                {/*backgroundColor="blue"*/}
                {/*barStyle="light-content"*/}
                {/*/>*/}
                {/*<WebViewExample/>*/}
                {/*<FlatList*/}
                {/*data={[{key: 'a'}, {key: 'b'}]}*/}
                {/*renderItem={({item}) => <Text>{item.key}</Text>}*/}
                {/*/>*/}

                <WebViewExample url={url} name="hadith" />

                {/*<ListView*/}
                {/*dataSource={this.state.dataSource}*/}
                {/*renderRow={(rowData) => <Text style={styles.titleText} onPress={() =>*/}
                {/*navigate('Profile', {name: rowData.url, title: rowData.name})*/}
                {/*}>{rowData.name}</Text>}*/}
                {/*/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffefc',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        alignItems: 'flex-start'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        padding: 15,
        marginTop: 10,
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#333',
    },
    searchBar: {
        color: '#007330',
        padding: 20,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#007330',
    }
});