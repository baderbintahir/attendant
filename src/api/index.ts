import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req: { headers: { Authorization: string; }; }) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const login = (formData: any) => API.post('/users/login', formData);
export const fetchEmployees = () => API.get('/users');
export const createEmployee = (newUser: any) => API.post('/users', newUser);
export const updateEmployee = (id: any, updatedUser: any) => API.patch(`/users/${id}`, updatedUser);
export const deleteEmployee = (id: any) => API.delete(`/users/${id}`);