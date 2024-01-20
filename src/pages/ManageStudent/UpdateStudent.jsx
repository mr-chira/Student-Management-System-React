import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import instance from '../../services/AxiosLink';

export default function UpdateStudent() {
    const location = useLocation();
	const [studentData, setStudentData] = useState(location.state?.rowData || {});
    const [fields, setFields] = useState([]);
    
	useEffect(() => {
        if (studentData) {
            const columns = location.state?.columns || []; 
            const generatedFields = columns.map(column => ({
                id: column.id,
                label: column.label,
                value: studentData[column.id] || '',
                type: 'text',
            }));
            setFields(generatedFields);
        }
    }, [location.state, studentData]);


    const handleSubmit = async (updatedData) => {
        try {
            const response = await instance.put(`/posts/${updatedData.id}`, updatedData);
            console.log('Updated data:', response.data);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div>
            <ProfileCard title="Update Student" fields={fields} onSubmit={handleSubmit} />
        </div>
    );
}
