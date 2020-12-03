import React, { Component, useEffect, useState } from 'react'
import CategoryService from '../services/CategoryService';
const AddCategoryComp = () => {
    const [Category,SetCategory] = useState({
        catgoryName : "",
    });
    const {catgoryName} = Category;
    const onInutChange = (e) =>{
        SetCategory({
            [e.target.name] : e.target.value
        });
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await CategoryService.createCategory(Category);
        console.log("created");
    }

    return (
        <div className="container">
            <br />
            <br />
            <div className="text-center">
                <h1>Add Category </ h1>
            </div>
            <br/>
            <br/>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Category Name" name="catgoryName" value={catgoryName} onChange={e => onInutChange(e)} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary fullWidthbutton">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default AddCategoryComp;