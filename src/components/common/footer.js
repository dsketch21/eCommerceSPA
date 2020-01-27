import React from 'react';

import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="grid-x">
                    <div className="cell medium-12 large-12">
                        Copyright &copy; Brilliant, All Rights Reserved
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
