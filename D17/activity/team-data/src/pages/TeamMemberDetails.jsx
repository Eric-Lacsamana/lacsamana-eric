import React from 'react';
import { useParams } from 'react-router-dom';
import MemberDetails from '../components/MemberDetails';

function TeamMemberDetails() {
  const { id } = useParams();
  
  const team = [
    { 
        id: 1, 
        name: 'Alice Johnson', 
        role: 'Frontend Developer', 
        email: 'alice@example.com',
        bio: 'Alice is a frontend wizard, creating beautiful and interactive websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit doloribus vitae sunt, magni sint ducimus tempora, at molestias fugiat porro neque ab architecto vero qui facere deserunt voluptas consequuntur debitis rerum, et necessitatibus facilis esse omnis! Molestias eligendi inventore voluptate ipsum nisi tempore, laboriosam maxime ex. Tempore minus temporibus at natus nostrum quae possimus suscipit! Soluta ipsum expedita voluptates enim accusantium amet, ut quia similique pariatur nostrum, ea repudiandae odit cumque fugit, eaque mollitia aliquam voluptatem? Modi eveniet in nostrum sed itaque veniam deleniti possimus, sunt ipsa, molestias assumenda natus autem sit, veritatis dolor eaque quae aliquam aspernatur maiores.' },
    { 
        id: 2, 
        name: 'Bob Smith', 
        role: 'Backend Developer',
        email: 'bob@example.com',
        bio: 'Bob builds the infrastructure that powers our web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit doloribus vitae sunt, magni sint ducimus tempora, at molestias fugiat porro neque ab architecto vero qui facere deserunt voluptas consequuntur debitis rerum, et necessitatibus facilis esse omnis! Molestias eligendi inventore voluptate ipsum nisi tempore, laboriosam maxime ex. Tempore minus temporibus at natus nostrum quae possimus suscipit! Soluta ipsum expedita voluptates enim accusantium amet, ut quia similique pariatur nostrum, ea repudiandae odit cumque fugit, eaque mollitia aliquam voluptatem? Modi eveniet in nostrum sed itaque veniam deleniti possimus, sunt ipsa, molestias assumenda natus autem sit, veritatis dolor eaque quae aliquam aspernatur maiores.' },
    { 
        id: 3, 
        name: 'Charlie Davis', 
        role: 'Designer',
        email: 'charlie@example.com',
        bio: 'Charlie designs user interfaces that are intuitive and user-friendly. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit doloribus vitae sunt, magni sint ducimus tempora, at molestias fugiat porro neque ab architecto vero qui facere deserunt voluptas consequuntur debitis rerum, et necessitatibus facilis esse omnis! Molestias eligendi inventore voluptate ipsum nisi tempore, laboriosam maxime ex. Tempore minus temporibus at natus nostrum quae possimus suscipit! Soluta ipsum expedita voluptates enim accusantium amet, ut quia similique pariatur nostrum, ea repudiandae odit cumque fugit, eaque mollitia aliquam voluptatem? Modi eveniet in nostrum sed itaque veniam deleniti possimus, sunt ipsa, molestias assumenda natus autem sit, veritatis dolor eaque quae aliquam aspernatur maiores.' },
  ];  

  const member = team.find((member) => member.id === parseInt(id));


  if (!member) {
    return <div>Team member not found</div>;
  }

  return (
    <div className="container mt-5">
        <MemberDetails data={member} />
    </div>
  );
}

export default TeamMemberDetails;
