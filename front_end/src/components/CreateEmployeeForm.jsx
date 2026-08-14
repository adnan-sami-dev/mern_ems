import React from 'react'

const CreateEmployeeForm = () => {
  return (
    <div className="relative h-full w-full backdrop-blur bg-black/30">

      {/* form modal */}
      <div className="animate-fade-in flex justify-center items-center rounded-lg bg-white">

        {/* personal info */}
        <div className="bg-white p-3 rounded-lg shadow-md w-full grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* input - first name */}
          <div>
            <label for="firstName">First Name</label>
            <input name="firstName" />
          </div>

          {/* input - last name */}
          <div>
            <label for="lastName">Last Name</label>
            <input name="lastName" />
          </div>

          {/* input - email */}
          <div>
            <label for="email">Email</label>
            <input name="email" />
          </div>

          {/* input - phone */}
          <div>
            <label for="phone">Phone</label>
            <input name="phone" />
          </div>

          {/* input - date joined */}
          <div>
            <label for="dateJoined">Date Joined</label>
            <input name="dateJoined" />
          </div>

          {/* input - additional info */}
          <div className="col-span-1 sm:col-span-2">
            <label for="additionalInfo">Additional Information</label>
            <textarea name="additionalInfo" rows={3} className="resize-none" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default CreateEmployeeForm