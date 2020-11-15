import React, { useEffect, useState } from 'react';

export default function Index() {
  function pacientes() {
    fetch('http://127.0.0.1:8000/api/pacientes')
      .then((response) => response.json())
      .then((data) => {
        const datos = data.map((x) => <td></td>);
      });
  }

  useEffect(() => {
    pacientes();
  });

  return (
    <>
      <h1>pacientes</h1>
      <table>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
