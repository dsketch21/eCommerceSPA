import React from 'react';
import HelpAssistant from './helpAssistant';

import './helpBox.scss';

class HelpBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHelpAssistantOpen: false
        };
    }

    toggleHelpAssistant() {
        this.setState({ isHelpAssistantOpen: !this.state.isHelpAssistantOpen });
    }

    render() {
        return (
            <>
                <div
                    className={`help-box${
                        this.state.isHelpAssistantOpen ? ' active' : ''
                    }`}
                    onClick={() => this.toggleHelpAssistant()}
                >
                    {!this.state.isHelpAssistantOpen && (
                        <span>
                            <i className="fa fa-envelope fa-lg"></i> Need help?
                        </span>
                    )}
                    {this.state.isHelpAssistantOpen && (
                        <span>
                            <i className="fa fa-arrow-down fa-lg"></i>
                        </span>
                    )}
                </div>
                <div
                    className={`helpAssistantWrapper${
                        this.state.isHelpAssistantOpen ? ' active' : ''
                    }`}
                >
                    <HelpAssistant />
                </div>
            </>
        );
    }
}

export default HelpBox;
