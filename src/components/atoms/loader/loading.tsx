import { CircularProgress } from '@mui/material';
import { FC } from 'react';

export const Loading: FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </div>
  );
};
