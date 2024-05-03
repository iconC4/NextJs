// tsrfc
"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {}

export default function page({ }: Props) {
  const [data, setData] = useState<IUser[]>([])

  const getData = async () => {
    const response = await axios.get<IUser[]>("https://663489ea9bb0df2359a1d0be.mockapi.io/api/v1/users")
    setData(response.data)
    console.log(response.data);
  }

  useEffect(() => { getData(); }, [])

  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.phone_number}</td>
                <td>{item.email}</td>
                <td>
                  <Link href={`/${item.id}`}>
                    Details
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}