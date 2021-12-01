import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import fetchData from '../../conrollers/fetchData';
import TodoItem from '../../components/todoItem/todoItem';
import {
    fetchListRequest,
    fetchListSuccess,
    fetchListfailure,
} from '../../redux';
import {todoListEndPoint} from '../../config';
import styles from './styles';
import NetworkError from '../../components/networkError';

function AllList() {
    const [selected, setSelected] = useState([]);
    const todoList = useSelector(state => state && state.todoList);
    const networkError = useSelector(state => state && state.error);
    const loading = useSelector(state => state && state.loading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListRequest());
        fetchData(todoListEndPoint)
            .then((response) => {
                const list = response.data.tasks;
                dispatch(fetchListSuccess(list));
            })
            .catch((error) => {
                dispatch(fetchListfailure(error.message));
            });
    }, [dispatch]);
    const onSelect = (id) => {
        selected.includes(id)
            ? setSelected(selected.filter((item) => item !== id))
            : setSelected([...selected, id]);
    };
    return (
        <SafeAreaView style={styles.container}>
            {    loading ? 
                <ActivityIndicator/>
                :
                networkError ?            
                    <NetworkError text={networkError}/>
                    :
                    <FlatList
                        data={todoList}
                        renderItem={({ item }) => (
                            <TodoItem
                                onClick={() => onSelect(item.id)}
                                selected={selected}
                                item={item}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
            }
        </SafeAreaView>
    );
}
AllList.propTypes = {
    todoList: PropTypes.array,
    fetchListSuccess: PropTypes.func,
    fetchListfailure: PropTypes.func
};
export default AllList;
