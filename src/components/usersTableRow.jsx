import React from 'react'

export default function UsersTableRow(item) {
  
  return (
    
        <tr>
                <td>{item.title}</td>
                <td>{item.teacher}</td>
                <td>${item.price}</td>
        </tr>
               
    
  )
}
