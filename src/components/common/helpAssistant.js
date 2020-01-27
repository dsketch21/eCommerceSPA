import React from 'react';
import HelpChat from './helpChat';
import HelpForm from './helpForm';
import moment from 'moment';
import 'moment-timezone';
import 'moment-business-time';

import './helpAssistant.scss';

class HelpAssistant extends React.Component {
    constructor(props) {
        super(props);
    }

    isSupportAvailable() {
        const date = moment().tz('America/New_York');
        return date.isWorkingDay();
    }

    render() {
        return (
            <>
                <div className="help-assistant">
                    {this.isSupportAvailable() && <HelpChat />}
                    {!this.isSupportAvailable() && <HelpForm />}
                </div>
            </>
        );
    }
}

export default HelpAssistant;
