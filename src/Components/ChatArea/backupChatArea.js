import React, { Component } from 'react';
import Input from './Chat/Input';
import ChatHeader from './Chat/ChatHeader';
import MessageList from './Chat/MessageList';

const styles = {
    root: {
        'float': 'left',
        'width': 'calc(100% - 398px)',
        'height': '100vh',
        'borderLeft': "1px solid rgb(212, 212, 212)",
        'backgroundColor': 'white',
    },
};

class ChatArea extends Component {
    render() {
        return (
            <div className="" style={styles.root}>
                <ChatHeader />
                <Input />
            </div>
        );
    }
}

export default ChatArea;