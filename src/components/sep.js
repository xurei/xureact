import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class Sep extends React.Component {
    static propTypes = {
        width: PropTypes.string, //default '0.3em'
    };
    
    render() {
        const props = this.props;
        return (
            <span style={{ display: 'inline-block', width: props.width || '0.3em' }}/>
        );
    }
    
    shouldComponentUpdate(nextProps) {
        return this.props.width !== nextProps.width;
    }
}

export default Sep;
