import React from 'react';

import './helpChat.scss';

class HelpChat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="help-chat">
                    <div className="message-box">Support: How can we help you?</div>
                    <div className="input-group">
                        <input className="input-group-field" type="text" />
                        <div className="input-group-button">
                            <input type="submit" className="button" value="Send" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HelpChat;
