import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Card, Typography } from '@material-ui/core';

const Count = () => {
  const [count, setCount] = useState('0');
  const data = useContext(DataContext);

  console.log(data);

  useEffect(() => {
    

  }, [])

  return (
    <div>
      <Card>
        <Typography>Total Deaths</Typography>
        <Typography>{data?.TotalDeaths}</Typography>
      </Card>
    </div>
  )
}

export default Count;
