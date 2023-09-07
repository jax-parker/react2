import React, { useState } from 'react'

function ControlledFormHooks1() {

    const [name, setName] = useState('')
    const [dept, setDept] = useState('reception')
    const [workno, setWorkno] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, dept, workno);
    }
    return (
        <div>
            <h2>Please fill out this form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id='name'
                        name='name'
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor="id-dept">Your Department:</label>
                    <select
                        id="dept"
                        name="dept"
                        value={dept}
                        onChange={
                            (e) => setDept(e.target.value)
                        }
                    >
                        <option value="reception">Reception</option>
                        <option value="accounts">Accounts</option>
                        <option value="workshop">Workshop</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-workno'>Work Number:</label>
                    <input
                        value={workno}
                        onChange={
                            (e) => setWorkno(e.target.value)
                        }
                        id="workno"
                        name="workno"
                        type="text"
                    />

                </div>
                <input type="submit" value="submit" />
            </form >
        </div >
    )
}

export default ControlledFormHooks1