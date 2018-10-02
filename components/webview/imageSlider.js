import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import a1 from './../../assets/images/1.png'
import a2 from './../../assets/images/2.png'
import a3 from './../../assets/images/3.png'
import a4 from './../../assets/images/4.png'
import a5 from './../../assets/images/5.png'
import a6 from './../../assets/images/6.png'
import a7 from './../../assets/images/7.png'
import a8 from './../../assets/images/8.png'
import a9 from './../../assets/images/9.png'
import a10 from './../../assets/images/10.png'
import a11 from './../../assets/images/11.png'
import a12 from './../../assets/images/12.png'
import a13 from './../../assets/images/13.png'
import a14 from './../../assets/images/14.png'
import a15 from './../../assets/images/15.png'
import a16 from './../../assets/images/16.png'
import a17 from './../../assets/images/17.png'
import a18 from './../../assets/images/18.png'
import a19 from './../../assets/images/19.png'
import a20 from './../../assets/images/20.png'
import a21 from './../../assets/images/21.png'
import a22 from './../../assets/images/22.png'
import a23 from './../../assets/images/23.png'
import a24 from './../../assets/images/24.png'
import a25 from './../../assets/images/25.png'
import a26 from './../../assets/images/26.png'
import a27 from './../../assets/images/27.png'
import a28 from './../../assets/images/28.png'
import a29 from './../../assets/images/29.png'
import a30 from './../../assets/images/30.png'
import a31 from './../../assets/images/31.png'
import a32 from './../../assets/images/32.png'
import a33 from './../../assets/images/33.png'
import a34 from './../../assets/images/34.png'
import a35 from './../../assets/images/35.png'
import a36 from './../../assets/images/36.png'
import a37 from './../../assets/images/37.png'
import a38 from './../../assets/images/38.png'
import a39 from './../../assets/images/39.png'
import a40 from './../../assets/images/40.png'
import a41 from './../../assets/images/41.png'
import a42 from './../../assets/images/42.png'


export default class ImageSldier extends Component {

    state = {
        page: '',
        current: 0,
    }

    total = 42;

    imageArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32,
        a33, a34, a35, a36, a37, a38, a39, a40, a41, a42]


    onSwipeUp(gestureState) {
        if (this.state.current !== (this.total - 1))
            this.setState({current: (this.state.current + 1)})
        console.log(this.state.current)


    }

    onSwipeDown(gestureState) {
        if (this.state.current !== 0)
            this.setState({current: (this.state.current - 1)})
        console.log(this.state.current)

    }

    onSwipeLeft(gestureState) {
        if (this.state.current !== 0)
            this.setState({current: (this.state.current - 1)})
        console.log(this.state.current)

    }

    onSwipeRight(gestureState) {
        if (this.state.current !== (this.total - 1))
            this.setState({current: (this.state.current + 1)})

        console.log(this.state.current)

    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;

        // switch (gestureName) {
        //     case SWIPE_UP:
        //         if(this.state.current !== (this.total-1))
        //             this.setState({current: (this.state.current+1)})
        //         break;
        //     case SWIPE_DOWN:
        //         if(this.state.current !== 0)
        //             this.setState({current: (this.state.current-1)})
        //         break;
        //     case SWIPE_LEFT:
        //         if(this.state.current !== 0)
        //             this.setState({current: (this.state.current-1)})
        //         break;
        //     case SWIPE_RIGHT:
        //         if(this.state.current !== (this.total-1))
        //             this.setState({current: (this.state.current+1)})
        //         break;
        // }
    }

    render() {

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems:'center'

                }}
            >


                <Image
                    style = {{ width: 350, height: 700 }}
                    source={this.imageArray[this.state.current]}
                    resizeMode="stretch"
                />


            </GestureRecognizer>
        );
    }
}

const styles = StyleSheet.create({
    stretch: {
        flex: 1,


    }
});