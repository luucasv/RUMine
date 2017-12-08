import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile } from 'material-ui/GridList';
import ProfileDrawer from '../components/ProfileDrawer.jsx';
import QueueDrawer from '../components/QueueDrawer.jsx';
import WalletButton from '../components/WalletButton.jsx';
import NumberPicker from 'react-widgets/lib/NumberPicker';
import '../css/Buy.css';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cafe: 0,
            almoco: 0,
            jantar: 0,

            total: 0
        };
    }

    render() {
        return (
        <div>
            <NumberPicker 
                max={1}
                min={-1}
                defaultValue={0.2585}
                format={{ style: 'percent' }}
            />
        </div>
        )
    }

    updateInputValue = function(evt) {
        this.setState({
        inputValue: evt.target.value
        });
    }
};

export default Buy;