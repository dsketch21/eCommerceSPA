import React from 'react';

class AccordionSlider extends React.Component {
    render() {
        return (
            <>
                <li className="accordion-item" data-accordion-item>
                    <a href="#" className="accordion-title">
                        {this.props.label}
                    </a>

                    <div className="accordion-content" data-tab-content>
                        {this.props.description}
                    </div>
                </li>
            </>
        );
    }
}

export default AccordionSlider;
