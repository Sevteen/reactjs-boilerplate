// Import library yang dibutuhkan untuk unit test
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Test case: Komponen App merender dengan benar dan mengubah nilai count saat tombol ditekan
test('App renders correctly and updates count on button click', () => {
  // Render komponen App
  render(<App/>);

  // Assert bahwa elemen-elemen berikut tampil pada halaman
  expect(screen.getByText('Vite + React')).toBeInTheDocument();
  // expect(screen.getByText(/Edit src\/App\.tsx/)).toBeInTheDocument();
  expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument();

  // Mengecek apakah nilai count ditampilkan dengan benar sebelum tombol ditekan
  expect(screen.getByText('count is 0')).toBeInTheDocument();

  // Klik tombol dan periksa apakah nilai count diperbarui sesuai dengan ekspektasi
  fireEvent.click(screen.getByText('count is 0'));
  expect(screen.getByText('count is 1')).toBeInTheDocument();

  fireEvent.click(screen.getByText('count is 1'));
  expect(screen.getByText('count is 2')).toBeInTheDocument();
});
