import React ,  { useState } from 'react'
import bgimage from "../assests/Frame.png"

function Forms() {
  const [jobRole, setJobRole] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [experience, setExperience] = useState('');



  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  
  const handleSubmit = async(e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch('', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       jobRole,
    //       jobLocation,
    //       experience: parseInt(experience), 
    //     }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log('Form data submitted successfully:', data);
        
    //     setJobRole('');
    //     setJobLocation('');
    //     setExperience('');
    //   } else {
    //     console.error('Failed to submit form data');

    //   }
    // } catch (error) {
    //   console.error('Error submitting form data:', error);
    // }
  };
  const handleSubmitcompany = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { companyName, location });
    setCompanyName('');
    setLocation('');
  };
  return (
    <div className='w-full bg-cover h-screen bg-formbgclr ml-2' style={{ backgroundImage: `url(${bgimage})` }}>
        

        {/* Search Job */}


        <div className='items-center justify-center'>
        <h2 className="text-xl font-semibold pt-6 ml-28 mb-4">Search Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mx-28">
          <input
            type="text"
            id="jobRole"
            className="mt-1 pl-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter job role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 mx-28">
          <input
            type="text"
            id="jobLocation"
            className="mt-1 pl-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter job location"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 mx-28">
          <input
            type="number"
            id="experience"
            className="mt-1 pl-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter experience in months"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className='text-center'>
        <button
          type="submit"
          className=" bg-formbtnclr text-white px-3 py-1 rounded-xl"
        >
          Search Job
        </button>
        </div>
      </form>
        </div>
        

        {/* Search Company */}
        <div>
        <h2 className="text-xl  font-semibold ml-28 mb-4 mt-4">Search by Company</h2>
      <form onSubmit={handleSubmitcompany}>
        <div className="mb-4 mx-28">
          <input
            type="text"
            id="companyName"
            className="mt-1 pl-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 mx-28">
          <input
            type="text"
            id="location"
            className="mt-1 pl-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className='text-center'>
        <button
          type="submit"
          className=" bg-formbtnclr text-white px-3 py-1 rounded-xl"
        >
          Search Company
        </button>
        </div>
      </form>
        </div>


    </div>
  )
}

export default Forms