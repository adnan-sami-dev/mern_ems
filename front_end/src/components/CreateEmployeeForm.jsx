import { DEPARTMENTS } from "../assets/assets"

const CreateEmployeeForm = ({initialData}) => {
  const formatDate = (dateJoined) => {
    const formattedDate = new Date(dateJoined).toISOString().split("T")[0]
    return formattedDate
  }

  return (
    <div className="relative h-full w-full backdrop-blur bg-black/30">

      {/* form modal */}
      <div className="animate-fade-in flex flex-col gap-4 justify-center items-center rounded-lg bg-white">

        {/* personal info */}
        <div className="bg-white p-3 rounded-lg shadow-md w-full grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* input - first name */}
          <div>
            <label for="firstName">First Name</label>
            <input name="firstName" type="text" defaultValue={initialData?.firstName} required />
          </div>

          {/* input - last name */}
          <div>
            <label for="lastName">Last Name</label>
            <input name="lastName" type="text" defaultValue={initialData?.lastName} required />
          </div>

          {/* input - email */}
          <div>
            <label for="email">Email</label>
            <input name="email" type="email" defaultValue={initialData?.email} required />
          </div>

          {/* input - phone */}
          <div>
            <label for="phone">Phone</label>
            <input name="phone" type="tel" defaultValue={initialData?.phone} required />
          </div>

          {/* input - date joined */}
          <div>
            <label for="dateJoined">Date Joined</label>
            <input name="dateJoined" type = "date" defaultValue={initialData ? formatDate(initialData.joinDate) : ""} required />
          </div>

          {/* input - additional info */}
          <div className="col-span-1 sm:col-span-2">
            <label for="additionalInfo">Additional Information</label>
            <textarea name="additionalInfo" rows={3} className="resize-none" defaultValue={initialData?.bio}/>
          </div>

        </div>

        {/* Job Details */}
        <div className="w-full">
          <h2 className="text-slate-900 font-medium mb-3 text-center">Employment Details</h2>
          <div className="bg-white p-3 rounded-lg shadow-md w-full grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label for="department" >Department</label>
              <select name="department" defaultValue={initialData?.department || ""}>
                <option value="">Select Department</option>
                {DEPARTMENTS.map((dept) => (
                  <option key="dept">
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            
          </div>
        </div>

      </div>

    </div>
  )
}

export default CreateEmployeeForm