import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
function StatusIcon({ selected, status }) {
    return <Icon type='ionicons' 
        name={status==='done' ? 
            'check-circle-outline' : 
            status==='in-progress' ? 
                'remove-circle-outline' : 
                'refresh'
        } 
        color={selected?'#000':'#fff'} 
        style={{marginRight:10}}
    />;
}
StatusIcon.propTypes = {
    status: PropTypes.string,
    selected: PropTypes.bool
};
export default StatusIcon;
