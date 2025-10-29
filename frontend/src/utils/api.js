import axios from 'axios';

const API_URL = '/api';

export  const fetchTasks = async () => {
    try{
        const response = await axios.get(`${API_URL}/todos`);
        return response.data.data;
    }catch(error){
        console.error("Error fetching Tasks:", error);
        throw error
    } 
}

export const addTask = async (task)  => {
    try{
        const response = await axios.post(`${API_URL}/todos/create`, task);
        return response.data.data;
    }  catch(error){
        console.error("Error addind Task:", error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try{
        const response = await axios.delete(`${API_URL}/todos/${id}`);
        return response.data.data;
    }catch(error){
        console.error("Error deleting Task:", error);
        throw error;
    }
}

export const updateTask = async (id, updateTask) => {
    try{
        const response = await axios.patch(`${API_URL}/todos/${id}`, updateTask);
        return response.data.data;
    }catch(error){
        console.error("Error updating Task:", error)
        throw error;
    }
}

export const searchTasks = async (query) => {
    try{
        const response = await axios.get(`${API_URL}/todos/search?search=${query}`);
        return response.data.data;
    }catch(error){
        console.error('Error searching tasks:', error);
        throw error;
    }
}