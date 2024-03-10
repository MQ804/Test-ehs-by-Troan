import React from 'react';

import '@/styles/globals.css';
import {
  Header,
  Main,
  Sidebar,
} from '@/components';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5]">
        <Sidebar />

        <div className="ml-[200px]">
          <Header />

          <Main children={children} />
        </div>
      </body>
    </html>
  );
}