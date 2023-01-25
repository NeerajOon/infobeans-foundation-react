import { useSelector } from "react-redux"

export const StudentTable=()=>{
    const {registrationList} = useSelector(state=>state.admin.value.registration);
    console.log(registrationList);
    return<>
     <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">All registrations</h6>
                        <a href="">Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col">Date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col">Annual Income</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Full details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrationList.map((student,index)=> <tr key={index}>
                                    <td>{student.dateOfRegistration}</td>
                                    <td>{student.firstname} {student.lastname}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.annualincome}</td>
                                    <td>{student.contact}</td>
                                    <td><a className="btn btn-sm btn-primary" href="">More..</a></td>
                                </tr>)}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
          
    </>
}