import React from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    Button,
    TextInput,
    View,
    ListView,
    ScrollView,
    Image
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            text: '',
            dataSource: ds.cloneWithRows([
                'John',
                'Joel',
                'James',
                'Jimmy',
                'Jackson',
                'Jillian',
                'Julie',
                'Devin'
            ])
        };
    }


    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <ScrollView>
                <Text style={{
                    fontSize: 96
                }}>Scroll me plz</Text>
                <Text style={{
                    fontSize: 96
                }}>Scrolling down</Text>
                <Text style={{
                    fontSize: 96
                }}>More</Text>
                <Text style={{
                    fontSize: 96
                }}>Keep going</Text>
                <Text style={{
                    fontSize: 96
                }}>Almost there</Text>
                <Text style={{
                    fontSize: 96
                }}>you can do it</Text>
                <Text style={{
                    fontSize: 96
                }}>home stretch</Text>
                <Text style={{
                    fontSize: 96
                }}>yay</Text>

              <Button onPress={()=> Alert.alert("fuck dave")} title="Press Me" color="#841584" accessibilityLabel="Learn more about this purple button"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
