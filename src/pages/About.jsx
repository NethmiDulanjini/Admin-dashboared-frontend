import React from 'react';
import { FaRegBell, FaRegEnvelope, FaUserCircle, FaRegComment, FaRegMoneyBillAlt, FaDatabase } from 'react-icons/fa';
import "./about.css"
import Sidebar from '../components/Sidebar';
const about = () => {
    return (<div style={{display:'flex'}}>
        <div style={{width:'10%'}}><Sidebar/></div>
        <div style={{width:'90%'}}>
        <div class="about-body">
            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
            <div>
                <form class="d-flex mt-5">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>

            <div class="card w-100 mt-5">
                <div class="card-body">
                    <h5 class="card-title">Users</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="co1">Contact.Number</th>
                                <th scope="co1"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Nethmi</td>
                                <td>Dulanjini</td>
                                <td>nethmi.dulanjini@gmail.com</td>
                                <td>0711344600</td>
                                <td >
                                    <button type="button" class="btn btn-primary">View</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Eranga</td>
                                <td>Thornton</td>
                                <td>eranga@gmail.com</td>
                                <td>0913367129</td>
                                <td>
                                    <button type="button" class="btn btn-primary">View</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Joison</td>
                                <td>Jacob.joison@gmail.com</td>
                                <td>0123567433</td>
                                <td>
                                    <button type="button" class="btn btn-primary">View</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                    

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Inoka</td>
                                <td>Maduwanthi</td>
                                <td>inoka@gmail.com</td>
                                <td>0711344600</td>
                                <td>
                                    <button type="button" class="btn btn-primary">View</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default about;