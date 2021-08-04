import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const CreateNotes = () => {
    const history = useHistory();

    const [data, setData] = useState({
        title:"", description:""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setData({...data, [name] : value})
    }

    const InsertData = async (e) => {
        e.preventDefault();

        const {title, description} = data;
        const res= await fetch("/addNotes", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title, description
            })
        });

        const rcvdata = await res.json();

        if(res.status === 422 || !rcvdata){
            window.alert("Message not sent");
            console.log("Message not sent");
        }else{
            window.alert("Message sent");
            console.log("Message sent");    
            
            history.push("/show");
        }

    }

    return (
        <>
            <div className="container">
                <div class="mb-3">
                    {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
                    <input type="text" class="form-control" id="formGroupExampleInput" onChange={handleInputs} value={data.title} name="title" placeholder="Name" />
                </div>
                <div class="mb-3">
                    {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                    <input type="text" class="form-control" id="formGroupExampleInput2" onChange={handleInputs} value={data.description} name="description" placeholder="Message" />
                </div>
                <center>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary text-center" onClick={InsertData}>Send</button>
                </div>
                </center>
            </div>
        </>
    )
}

export default CreateNotes
