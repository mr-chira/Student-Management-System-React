import React, { useEffect, useState } from 'react';
import MainTable from '../../components/MainTable/MainTable';
import LoadingGif from '../../assets/Infinity-1s-200px.gif'
import instance from '../../services/AxiosLink';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const navigate = useNavigate();

  const handleRowSelect = (selectedRows) => {
    setSelectedIds(selectedRows);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get('/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (selectedId) => {
    setIsDeleting(true); // Start loading

    try {
        await instance.delete(`/posts/${selectedId}`);
        setData(data.filter(item => item.id !== selectedId));
        setSelectedIds([]);
    } catch (error) {
        console.error('Error deleting post: ', error);
    } finally {
        setIsDeleting(false); // Stop loading
    }
  };

  const handleEdit = () => {
    if (selectedIds.length === 1) {
        const rowData = data.find(row => row.id === selectedIds[0]);
        // setSelectedRowData(rowData);
        navigate('/update/student', { state: { rowData, columns } });
    } else {
      console.error('Error deleting post: ', error);
    }
  };  

  const columns = [
    { id: 'id', numeric: true, label: 'ID' },
    { id: 'userId', numeric: true, label: 'User ID' },
    { id: 'title', numeric: false, label: 'Title' },
    { id: 'body', numeric: false, label: 'Body' },
  ];

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0
  };

  return (
    <div>
        {isDeleting && (
            <div style={loadingStyle}>
                <CircularProgress />
            </div>
        )}
        {loading ? (
          <div style={loadingStyle}><img src={LoadingGif} alt="Loading..." /></div>
        ) : (
          <MainTable
            columns={columns}
            data={data}
            rowKey="id"
            tableHeading="All Students"
            withCheckbox={true}
            withPagination={true}
            rowsPerPageOptions={[5, 10, 25]}
            onSelect={handleRowSelect}
            onDelete={() => handleDelete(selectedIds[0])}
            selectedIds={selectedIds}
            onEdit={handleEdit}
          />
        )}
    </div>
  )
}
