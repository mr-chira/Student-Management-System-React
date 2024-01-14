import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainTable from '../../components/MainTable/MainTable';
import LoadingGif from '../../assets/Infinity-1s-200px.gif'

export default function Dashboard() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
        />
      )}
    </div>
  )
}
