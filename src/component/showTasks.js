import React from "react";
import '../App.css'



export const ShowTasks = React.memo(({ tasks, deleteById, editTask, inputChange, saveClick, editClick, currentIndex, next, prev, changeIndex, numbers, records }) => {
    return (
        <div className="dv1">

            <div className="ddd1" style={{ width: "1000px", height: "300px", display: "block", alignItems: "center", justifyContent: "center" }}>

                <table style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map((e) => (

                                <tr key={e.id} style={{ backgroundColor: "rgb(213, 213, 213)" }}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>

                                    <td>{e.name}</td>
                                    <td style={{ display: 'flex', }}>
                                        <button onClick={() => deleteById(e.id)} style={{ display: "flex", border: "3px solid rgb(238,238,238)", justifycontent: "flex-end", backgroundColor: "rgb(213, 213, 213)" }}>X</button>
                                    </td>
                                    <td>
                                        {editTask ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={editClick}
                                                    onChange={inputChange}
                                                />
                                                <button onClick={saveClick} style={{ display: "flex", border: "3px solid rgb(238,238,238)", justifycontent: "flex-end", backgroundColor: "rgb(213, 213, 213)" }}>Save</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <p>Data: {e.name}</p>
                                                <button onClick={editClick} style={{ display: "flex", border: "3px solid rgb(238,238,238)", justifycontent: "flex-end", backgroundColor: "rgb(213, 213, 213)" }}>Edit</button>
                                            </div>
                                        )}
                                    </td>

                                </tr>


                            ))
                        }
                    </tbody>
                </table>

                <nav >
                    <ul className="pagination">
                        <li className="pahe-item">
                            <a href="#" className="page-link" onClick={prev}>Prev</a>
                        </li>
                        {
                            numbers.map((e) => (
                                <li className={`page-item ${currentIndex === e ? 'active' : ''}`} key={e.id}>
                                    <a href="#" className="page-link" onClick={() => changeIndex(e)}>{e}</a>
                                </li>
                            ))
                        }
                        <li className="pahe-item">
                            <a href="#" className="page-link" onClick={next}>Next</a>
                        </li>
                    </ul>
                </nav>


            </div>


        </div>
    )


})

export default ShowTasks