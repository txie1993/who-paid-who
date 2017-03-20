import React from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    TouchableHighlight,
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
      const routes = [
        {title: 'Dave', index: 0},
        {title: 'Fuck Dave', index: 1},
      ];
      return (
        <Navigator
  renderScene={(route, navigator) =>
    <Text>Hello!</Text>
  }
  navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          { return (<Text>Cancel</Text>); },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text>Done</Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text>Awesome Nav Bar</Text>); },
       }}
       style={{backgroundColor: 'gray',
       paddingTop: 100}}
     />
  }
/>
// <Navigator
//   initialRoute={routes[0]}
//   initialRouteStack={routes}
//   renderScene={(route, navigator) =>
//     <TouchableHighlight onPress={() => {
//       if (route.index === 0) {
//         navigator.push(routes[1]);
//       } else {
//         navigator.pop();
//       }
//     }}>
//     <Text>Hello {route.title}!</Text>
//     </TouchableHighlight>
//   }
//   style={{padding: 100}}
// />
      );
    }

    // render() {
    //     let pic = {
    //         uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    //     };
    //     return (
    //         <ScrollView>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>Scroll me plz</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>Scrolling down</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>More</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>Keep going</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>Almost there</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>you can do it</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>home stretch</Text>
    //             <Text style={{
    //                 fontSize: 96
    //             }}>yay</Text>
    //
    //           <Button onPress={()=> Alert.alert("fuck dave")} title="Press Me" color="#841584" accessibilityLabel="Learn more about this purple button"/>
    //         </ScrollView>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
