import React, { Component, useEffect, useState } from 'react'
import CategoryService from '../services/CategoryService'
import { Link } from 'react-router-dom'
const ListCategoryComponent = () => {
    const [Categorys, setCategory] = useState([]);

    const categoryLoad = async () => {
        const category = await CategoryService.getCategory();
        setCategory(category.data.data.categoryList);
    };

    useEffect(() => {
        categoryLoad();
    }, []);

    // componentDidMount() {
    //     CategoryService.getCategory().then((res) => {
    //         console.log(res.data.data.categoryList);
    //         this.setState({ Categories: res.data.data.categoryList });
    //     });
    // }
    // addCategory() {
    //     this.props.history.push('/add-Category/_add');
    // }

    return (
        <div className="container">
            <h2 className="text-center">Categorys List</h2>
            <div className=" addCategorybtn">
                <Link exact path to="/Category/Add" className="btn btn-primary">Add New</Link>
            </div>
            <br></br>
            <div className="row">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Edit</th>
                            <th scope="col">view</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Categorys.map((cat, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{cat.category_name}</td>
                                <td><Link exact path to="/Category/Edit" className="btn btn-primary">Edit</Link></td>
                                <td><Link exact path to="/Category/View" className="btn btn-primary">View</Link></td>
                                <td><button className="btn btn-primary">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default ListCategoryComponent