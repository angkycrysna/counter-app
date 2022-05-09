import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Form from './components/Form';
import Table from './components/Table';

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('additionResult');
  if (data) return JSON.parse(data);
  return [];
};

const getArraySum = (n) => {
  let total = 0;
  for (const i in n) {
    total += n[i];
  }
  return total;
};

function App() {
  const [data, setData] = useState(getDataFromLocalStorage());
  const [nValue, setnValue] = useState(0);

  const handleCountNValue = () => {
    // Remove the existing additionResult data in Local Storage
    localStorage.removeItem('additionResult');

    // Define new array data that will be inserted into Local Storage
    const newAdditionResultData = [];

    // Set loop index
    let i = 0;

    // The last two digits of addition result that will be using to calculate the next number
    let lastTwoDigitsAdditionResult = [];

    // The present value of the sum of the two previous numbers
    let currentAdditionResult = 0;

    // Filter out the additive inverse number
    if (parseInt(nValue) === -0) return;

    while (i <= nValue) {
      if (i <= 1) {
        currentAdditionResult = i;
        lastTwoDigitsAdditionResult.push(i);
      } else {
        // Calculate the last two digit numbers
        const n = getArraySum(lastTwoDigitsAdditionResult);
        // Remove the first item of the array
        lastTwoDigitsAdditionResult.shift();
        // Then add the calculated number to the array
        lastTwoDigitsAdditionResult.push(n);
        // Set the current value
        currentAdditionResult = n;
      }

      newAdditionResultData.push({
        nNumber: i,
        nAdditionResult: currentAdditionResult,
      });

      i++;
    }

    // Set the new data
    setData(newAdditionResultData);
  };

  useEffect(() => {
    // Save to Local Storage each time there's new change
    localStorage.setItem('additionResult', JSON.stringify(data));
  }, [data]);

  return (
    <Box style={{ marginTop: 30, marginBottom: 20 }}>
      <Stack spacing={2} direction='column'>
        {/* Input Form and the Button */}
        <Stack spacing={2} direction='row'>
          <Form onChange={(e) => setnValue(e.target.value)} />
          <Button
            variant='contained'
            size='small'
            onClick={() => handleCountNValue()}
          >
            Hitung
          </Button>
        </Stack>
        {/* The Table */}
        <Table rows={data} />
      </Stack>
    </Box>
  );
}

export default App;
