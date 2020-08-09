import React from "react";
import styled from "styled-components";

const Member = styled.div`
  outline: 2px solid black;
  width: 40%;
  margin: 15px auto;
  background: palegreen;
  padding: 1%;
`;

const Team = styled.div`
  margin: 15px;
`;

const Name = styled.h2`
  font-size: 20px;
`;
const Email = styled.p`
  font-size: 15px;
  color: blue;
  text-decoration: underline;
`;

const TeamMember = (props) => {
  console.log(props);
  return (
    <Team className="team">
      {props.teamMembers.map((teamMember) => (
        <Member className="member" key={teamMember.id}>
          <Name>{teamMember.firstname}</Name>
          <Name>{teamMember.lastname}</Name>
          <Email>{teamMember.email}</Email>
        </Member>
      ))}
    </Team>
  );
};

export default TeamMember;
