import React from 'react';
import './style.css'; // Import CSS file for styling



function StudentForm() {

  return (
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="mb-4 display-5 text-center">Student Information Form</h2>
          <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-lg-center">
        <div class="col-12 col-lg-8">
          <div class="bg-white border rounded shadow-sm overflow-hidden">

            <form>
              <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                <div class="col-12 col-md-6">
                  <label for="firstname" class="form-label">First Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="firstname" name="firstname" value="" required/>
                </div>

                <div class="col-12 col-md-6">
                  <label for="lastname" class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="lastname" name="lastname" value="" required/>
                </div>

                <div class="col-12 col-md-6">
                  <label for="email" class="form-label">Email <span class="text-danger">*</span></label>  
                  <input type="email" class="form-control" id="email" name="email" value="" required/>
                </div>

                <div class="col-12 col-md-6">
                  <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" name="phone" value=""/>
                </div>

                <div class="col-12 text-center">
                    <button class="btn btn-primary btn-lg w-25" type="submit">Submit</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default StudentForm;

