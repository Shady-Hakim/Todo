import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

function NetworkError({text}) {
    return (
        <View style={styles.container}>
            <Icon
                type="ionicons"
                name="signal-wifi-off"
                size={60}
            />
            <Text style={styles.title}>Network Error</Text>
            <Text style={styles.subTitle}>{text}</Text>
        </View>
    );
}
NetworkError.propTypes = {
    text: PropTypes.string,
};
export default NetworkError;
