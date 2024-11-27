import { teamMembers } from "@/app/teamMembers";

import TeamMember from "./teamMember";

export default function TeamMembersList() {
  const orderedMembers = [...teamMembers].sort(
    (a, b) => a.position - b.position
  );

  return (
    <div className=" w-[95%] max-w-[1560px] md:mr-0 mr-[-5%] mx-auto mt-10 lg:mt-16">
      <div className="w-full flex-col lg:flex-row lg:flex-wrap hidden lg:flex">
        {teamMembers.map((teamMember, index) => {
          let className;

          if (teamMember.profesion === "Estratega Digital") {
            className = "relative left-[-8%] top-[1.5%]";
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
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap lg:hidden overflow-x-hidden">
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
