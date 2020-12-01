import React, { Component } from 'react'
import CategoryService from '../services/CategoryService'

class ListCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Categories: []
        }
        this.addCategory = this.addCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    deleteCategory(id){
        CategoryService.deleteCategory(id).then( res => {
            this.setState({Categorys: this.state.Categorys.filter(Category => Category.id !== id)});
        });
    }
    viewCategory(id){
        this.props.history.push(`/view-Category/${id}`);
    }
    editCategory(id){
        this.props.history.push(`/add-Category/${id}`);
    }

    componentDidMount(){
        CategoryService.getCategorys().then((res) => {
            this.setState({ Categorys: res.data});
        });
    }

    addCategory(){
        this.props.history.push('/add-Category/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Categorys List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCategory}> Add Category</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Category First Name</th>
                                    <th> Category Last Name</th>
                                    <th> Category Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Categorys.map(
                                        Category => 
                                        <tr key = {Category.id}>
                                             <td> { Category.firstName} </td>   
                                             <td> {Category.lastName}</td>
                                             <td> {Category.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editCategory(Category.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCategory(Category.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCategory(Category.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCategoryComponent