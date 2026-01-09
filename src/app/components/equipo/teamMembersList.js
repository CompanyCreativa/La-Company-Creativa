import { teamMembers } from "@/app/teamMembers";

import TeamMember from "./teamMember";

export default function TeamMembersList() {
  const orderedMembers = [...teamMembers].sort(
    (a, b) => a.position - b.position
  );

  return (
    <div className="max-w-[1500px] ml-10 self-center mt-10 lg:mt-10">
      <div
        className="w-full flex-col justify-around gap-5 
       lg:flex-row lg:flex-wrap hidden lg:flex"
      >
        {teamMembers.map((teamMember, index) => {
          let className;

          if (teamMember.profesion === "Estratega Digital") {
            className = "relative left-[-10%] top-[1.5%]";
          }

          return (
            <TeamMember
              key={index}
              img={teamMember.img}
              name={teamMember.name}
              profesion={teamMember.profesion}
              className={className}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-col lg:hidden overflow-x-visible ">
        {orderedMembers.map((teamMember, index) => {
          let className;

          if (teamMember.name === "Tomás Jaramillo") {
            className =
              "relative left-[-8%] top-[1.5%] lg:top-[0%] lg:left-[0%] ";
          }

          return (
            <TeamMember
              key={index}
              img={teamMember.img}
              name={teamMember.name}
              profesion={teamMember.profesion}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
}
