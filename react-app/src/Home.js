import "./Home.css";
import React, { useState } from 'react'

function Home() {
  return (
    <div className="home">
      <table>
        <thead>
          <th>
            <td>User</td>
            <td>Password</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>user1</td>
            <td>12345678</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home;