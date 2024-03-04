import { Link} from "react-router-dom";

function Rate(){
    return(
        <>
        <section style={{ minHeight: "100vh", position:"relative"}}>
            <div className="divider divider-start text-4xl pb-8"><Link to="/" className="flex justify-center items-center gap-1">
                <IoIosBackspace />
                    ย้อนกลับ
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 max-lg:grid-cols-2 max-md:grid-cols-1">
                <div className="grid shadow-sm rounded">
                    <p>หวยไทย</p>
                    <table>
                        <thead>
                            <th>ประเภท</th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
        </>
    )
}
export default Rate