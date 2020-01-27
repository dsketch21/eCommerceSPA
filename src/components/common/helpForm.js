import React from 'react';

import './helpForm.scss';

class HelpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="help-form">
                    <form>
                        <label>
                            Name:
                            <input type="text" />
                        </label>
                        <label>
                            Message:
                            <textarea></textarea>
                        </label>
                        <div className="button-row">
                            <button type="button" className="button small">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default HelpForm;
