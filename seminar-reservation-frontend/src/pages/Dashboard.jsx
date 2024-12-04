import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <main className="flex-1 p-6">
      <section className="space-y-6">

        <div className="flex justify-between gap-6">
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Total Sessions</h3>
              <p className="text-2xl font-bold text-primary">15</p>
            </div>
          </div>

          <div className="card w-1/4 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Registered Attendees</h3>
              <p className="text-2xl font-bold text-primary">120</p>
            </div>
          </div>

          <div className="card w-1/4 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Speakers</h3>
              <p className="text-2xl font-bold text-primary">8</p>
            </div>
          </div>
        </div>

  
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Upcoming Sessions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

            <div className="card w-full bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">Session 1: Introduction to React</h4>
                <p className="text-gray-600">Speaker: Jane Doe</p>
                <p className="text-sm text-gray-400">Time: 10:00 AM - 11:00 AM</p>
                <div className="flex gap-2 mt-4">
                  <button className="btn btn-primary">Join Session</button>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </div>
              </div>
            </div>


            <div className="card w-full bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">Session 2: Advanced TailwindCSS</h4>
                <p className="text-gray-600">Speaker: John Smith</p>
                <p className="text-sm text-gray-400">Time: 11:30 AM - 12:30 PM</p>
                <div className="flex gap-2 mt-4">
                  <button className="btn btn-primary">Join Session</button>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </div>
              </div>
            </div>


            <div className="card w-full bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">Session 3: UI/UX Best Practices</h4>
                <p className="text-gray-600">Speaker: Alice Johnson</p>
                <p className="text-sm text-gray-400">Time: 1:00 PM - 2:00 PM</p>
                <div className="flex gap-2 mt-4">
                  <button className="btn btn-primary">Join Session</button>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <div className="flex gap-4 mt-4">
          <div className="card w-1/4 bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">View Seminars</h4>
                <Link to="/admin/seminars" className="btn btn-secondary w-full">Go to Seminars</Link>
              </div>
            </div>

            <div className="card w-1/4 bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">View Speakers</h4>
                <Link to="/speakers" className="btn btn-secondary w-full">Go to Speakers</Link>
              </div>
            </div>

            <div className="card w-1/4 bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">View Schedule</h4>
                <Link to="/schedule" className="btn btn-secondary w-full">Go to Schedule</Link>
              </div>
            </div>

            <div className="card w-1/4 bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">Download Resources</h4>
                <Link to="/resources" className="btn btn-secondary w-full">Go to Resources</Link>
              </div>
            </div>
          </div>
        </div>


      </section>
    </main>
  );
};

export default DashboardPage;
