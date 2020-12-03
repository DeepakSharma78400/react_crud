// import react from 'react'   

const ContactComp = ()=>{
    return(
        <div className="container">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">sur name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};
export default ContactComp;