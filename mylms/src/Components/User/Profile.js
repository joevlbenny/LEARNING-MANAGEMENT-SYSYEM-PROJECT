import React from 'react'
import Sidebar from './Sidebar'
function Profile() {
    return (
        <div>




            <div className='container mt-4'>
                <div className='row'>


                    < aside className='col-md-3'>

                        <Sidebar />
                    </aside>

                    <section className='col-md-9 '>
                        <div className='card'>
                            <h5 className='card-header'>Profile</h5>
                            <div className="card-body">
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Full name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>

                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Profile Picture</label>
                                    <div class="col-sm-10">
                                        <input type="file" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control mt-2" id="inputPassword" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">New Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control mt-2" id="inputPassword" />
                                    </div>

                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Interests</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>

                                <button className='btn-primary btn-sm ms-3 mb-3' style={{ 'width': '100px' }}>Update</button>
                            </div>
                        </div>


                    </section>


                </div>
            </div>



        </div>
    )
}

export default Profile
