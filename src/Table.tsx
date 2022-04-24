import React from 'react'

const Table = ({ time, date } : {time:any, date:any}) => {
  return (
    <div style={{border: '2px solid', color: 'rgb(43, 49, 167)'}}>
      <table>
        <thead>
          <th>Unix Milliseconds</th>
          <th>Date</th>
        </thead>
        <tbody>
          <td>{time}</td>
          <td>{date}</td>
        </tbody>
      </table>
    </div>
  )
}

export default Table