"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

export default function page({ }: Props) {
    const router = useRouter() // redirect page
    const [first_name, setFirst_name] = useState<string>("")
    const [last_name, setLast_name] = useState<string>("")
    const [phone_number, setPhone_number] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data: IUser = {
            first_name,
            last_name,
            phone_number,
            email
        }

        const response = await axios.post("https://663489ea9bb0df2359a1d0be.mockapi.io/api/v1/users", data)
        if (response.status === 201) {
            alert("Add user success")
            router.push("/")
        } else {
            alert("Add user failed")
        }
    }

    return (
        <React.Fragment>
            <h1>Add user</h1>
            <form>
                <label>First name : </label>
                <input type="text" name='first_name' required onChange={(e) => { setFirst_name(e.target.value) }} value={first_name} />
                <br />
                <label>Last name : </label>
                <input type="text" name='last_name' onChange={(e) => { setLast_name(e.target.value) }} value={last_name} />
                <br />
                <label>Phone Number : </label>
                <input type="text" name='phone_number' onChange={(e) => { setPhone_number(e.target.value) }} value={phone_number} />
                <br />
                <label>Email : </label>
                <input type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                <br />
                <button type='submit' onClick={handleAdd}>Add</button>
            </form>
        </React.Fragment>
    )
}