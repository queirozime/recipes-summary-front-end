import React from 'react';
import { CSVLink } from 'react-csv';
import { Button } from '../components/Navbar/nav-styles';

const ExportCSV: React.FC<any> = ({ data, headers, filename }) => {
  if(!data) return <></>;
  const csvData = [headers, ...data];
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <Button>
      <CSVLink data={csvData} filename={filename} style={linkStyle}>
        Exportar CSV
      </CSVLink>
    </Button>
  );
};

export default ExportCSV;