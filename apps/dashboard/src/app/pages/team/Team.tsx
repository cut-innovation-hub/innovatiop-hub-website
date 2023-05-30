/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import TeamComponent from '../../components/team-organogram-comp/TeamComponent';
import { Link } from 'react-router-dom';

type Props = {};

const Team = (props: Props) => {
  const innovation_team = [
    { name: 'Prof Mtangi', position: 'Director of innovation and research' },
    { name: 'Eng Mlambo', position: 'Technical services manager' },
  ];
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full max-w-7xl mx-auto py-16">
        <div className="flex space-x-2 pb-8">
          <input
            type="text"
            placeholder="search member..."
            className="border border-slate-200 flex-1 p-2 rounded"
          />
          <Link
            to="#"
            className="flex bg-blue-800 hover:bg-blue-900 font-semibold cursor-pointer text-white items-center content-center p-2 rounded-lg"
          >
            Add Member
          </Link>
        </div>
        <p className="text-slate-700 font-semibold pb-8">Director</p>
        {innovation_team.map((item, index) => (
          <TeamComponent name={item.name} position={item.position} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Team;
