import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';


const DisplayNotes = () => {
    const history = useHistory();

    const [display, setDisplay] = useState([])

    const showdata = async () => {
        try {
            const res = await fetch('/viewNotes', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);

            setDisplay(data);
            // console.log(data.title);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            history.push('/');
        }

    }
    useEffect(() => {
        showdata();
    }, []);

    return (
        <>
            <center>
                {display.map((message) => (
                    <>
                    <div className="container my-3">
                        <div className="card">
                            <h5 className="card-header">All todos</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{message.title}</h5>
                                    <p className="card-text">{message.description}</p>
                                </div>
                        </div>
                    </div>
                    </>
                ))}
            </center>
        </>
    )
}

export default DisplayNotes
