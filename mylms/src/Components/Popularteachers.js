import React from 'react'
import { Link } from 'react-router-dom'
function PopularTeachers() {
    return (
        <div>
            <div className='container mt-4'>
                <h3 className='pb-1 mb-4'>Popular Teachers </h3>
                <div className='row'>

                    <div className='col-md-3'>

                        <div className="card" >
                            <Link to="/detail/1"><img src="monitor.jpg" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4 '>
                                    <span>Rating:4/5</span>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className='col-md-3'>

                        <div className="card" >
                            <img src="teacher2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href='#'>Course title</a></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>

                        <div className="card" >
                            <img src="image12.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href='#'>Course title</a></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div className="card" >
                            <img src="image13.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href='#'>Course title</a></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>




            {/* 2nd container */}
            <div className='container mt-4'>
                <div className='row'>

                    <div className='col-md-3'>

                        <div className="card" >
                            <Link to="/detail/1"><img src="image1.jpg" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>

                        </div>


                    </div>



                    <div className='col-md-3'>

                        <div className="card" >
                            <img src="monitor.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href='#'>Course title</a></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>

                        <div className="card" >
                            <img src="monitor.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href='#'>Course title</a></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div className="card" >
                            <img src="monitor.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href='#'>Course title</a></h5>
                            </div>
                            <div class="card-footer ">
                                <div className='title ms-4'>
                                    <span>Rating:4/5</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center mt-5">

                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PopularTeachers
