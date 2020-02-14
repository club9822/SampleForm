import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    BackHandler,KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Header from '../../../components/Header';
import {height, width} from '../../../utils/windowDimensions';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';
class Step_3 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        Navigation.events().bindComponent(this);
    }
    onBackPress=()=>{
        const Navigation=require('react-native-navigation').Navigation;
        Navigation.pop(this.props.componentId)
    }
    componentDidAppear() {}
    componentDidDisAppear() {}
    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor:'#ffffff'}}>
                <Header
                    leftFn={this.onBackPress}
                    renderLeft={'arrow-left'}
                    leftColor={'#fff'}
                    renderLeftType={'Icon'}
                    renderCenter={'عنوان صفحه'}
                    renderCenterType={'Text'}
                    containerStyle={{
                        backgroundColor:'#4a91ff',
                        position:'relative',
                    }}
                />
                <MapView
                    style={{
                        flex:1,
                    }}
                initialRegion={{
                    latitude: 30.27471,
                    longitude: 50.0051831,
                    latitudeDelta: 0.008382674738061716,
                    longitudeDelta: 0.006324984133251701,
                }}

                >

                </MapView>
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

export default connect(
    mapStateToProps,
    {},
)(Step_3);
