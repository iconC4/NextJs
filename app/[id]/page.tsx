"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({ }: Props) {
    const param = useParams<{ id: string }>();
    const [dataById, setDataById] = useState<IUser | null>(null);

    const getDataById = async () => {
        const response = await axios.get(`https://663489ea9bb0df2359a1d0be.mockapi.io/api/v1/users/${param.id}`)
        setDataById(response.data)
    }

    useEffect(() => { getDataById() }, [])

    return (
        <React.Fragment>
            <div style={{ margin: '10px' }}>
                <h2>Detail</h2>
                <label>First name : </label> {dataById?.first_name} <br />
                <label>Last name : </label> {dataById?.last_name} <br />
                <label>Phone number : </label> {dataById?.phone_number} <br />
                <label>Email : </label> {dataById?.email} <br />
            </div>
        </React.Fragment>
    )
}