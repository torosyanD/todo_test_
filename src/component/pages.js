import React, { useState } from "react"
import Data from "../Data.json"
export const Pages = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = Data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(Data.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


    return (

        < div >

            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        records.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    <li className="pahe-item">
                        <a href="#" className="page-link" onClick={prevPage}>Prev</a>
                    </li>
                    {
                        numbers.map((d, i) => (
                            <li className={`page-item ${currentPage === d ? 'active' : ''}`} key={i}>
                                <a href="#" className="page-link" onClick={() => changeCPage(d)}>{d}</a>
                            </li>
                        ))
                    }
                    <li className="pahe-item">
                        <a href="#" className="page-link" onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    function changeCPage(id) {
        setCurrentPage(id)
    }
}

export default Pages