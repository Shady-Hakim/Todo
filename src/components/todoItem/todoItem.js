import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import StatusIcon from '../statusIcon';
import styles from './styles';

function TodoItem({ item, onClick, selected }) {
    const itemSelected = selected && selected.includes(item.id);
    return (
        <View>
            <TouchableOpacity
                onPress={onClick}
                style={[
                    styles.itemContainer,
                    itemSelected ? styles.selectedItem : null,
                ]}
            >
                <View style={styles.leftSide}>
                    <StatusIcon 
                        selected={itemSelected} 
                        status={item.status}
                    />
                    <Text
                        style={[
                            styles.texts,
                            itemSelected && styles.selectedText,
                        ]}
                    >
                        {item && item.name}
                    </Text>
                </View>
                <Text
                    style={[
                        styles.texts,
                        itemSelected && styles.selectedText,
                    ]}
                >
                    {item && item.due_date}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

TodoItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
    selected: PropTypes.array,
};
export default TodoItem;
