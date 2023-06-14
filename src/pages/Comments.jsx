import React from 'react';
import { FaRegBell, FaRegEnvelope } from 'react-icons/fa';
import "./about.css";
import Sidebar from '../components/Sidebar';

const comments = () => {
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
                <h5 class="card-title">Reveiws</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Reveiws</th>
                            <th scope="co1">Product Code Number</th>
                            <th scope="co1"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>U00001</td>
                            <td>Dulanjini</td>
                            <td>Excellent Product.</td>
                            <td>00007</td>
                            <td>
                                <button type="button" class="btn btn-primary">View</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>U00002</td>
                            <td>Inoka</td>
                            <td>woow</td>
                            <td>00115</td>
                            <td>
                                <button type="button" class="btn btn-primary">View</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>U00003</td>
                            <td>Amysha</td>
                            <td>Superb</td>
                            <td>00072</td>
                            <td>
                                <button type="button" class="btn btn-primary">View</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>U00004</td>
                            <td>Aruna</td>
                            <td>Amazing product</td>
                            <td>01234</td>
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

export default comments;