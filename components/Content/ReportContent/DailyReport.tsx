import React, { useState } from 'react';
import Link from 'next/link';


export default function DailyReport() {

    const [name, setName] = useState("");

    const doIt = async () => {
        const res = await fetch('/api/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: name })
        })

        // const data = await res.json()
        // console.log(data)

        console.log(res)
    }



    return (
        <div>
            <h1>Ежедневный доклад</h1>
            <div>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" onClick={doIt}>Submit</button>
            </div>
        </div >

    );
};
