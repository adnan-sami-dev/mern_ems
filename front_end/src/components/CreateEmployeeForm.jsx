import React from 'react'

const CreateEmployeeForm = () => {
  return (
    <div>
      {/* backdrop */}
      <div />

      {/* form modal */}
      <div>

        {/* personal info */}
        <div>

          {/* input - first name */}
          <div>
            <label></label>
            <input />
          </div>

          {/* input - last name */}
          <div>
            <label></label>
            <input />
          </div>

          {/* input - email */}
          <div>
            <label></label>
            <input />
          </div>

          {/* input - phone */}
          <div>
            <label></label>
            <input />
          </div>

          {/* input - date joined */}
          <div>
            <label></label>
            <input />
          </div>

          {/* input - additional info */}
          <div>
            <label></label>
            <textarea rows={3} className="resize-none" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default CreateEmployeeForm