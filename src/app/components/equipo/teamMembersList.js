import { teamMembers } from "@/app/teamMembers";

import TeamMember from "./teamMember";

export default function TeamMembersList() {
  const orderedMembers = [...teamMembers].sort(
    (a, b) => a.position - b.position
  );
  return (
    <div className=" w-[95%] max-w-[1560px] mx-auto mt-10 lg:mt-16">
      <div className="w-full flex-col lg:flex-row lg:flex-wrap justify-between hidden lg:flex">
        {teamMembers.map((teamMember, index) => {
          let className;

          if (teamMember.name === "Esteban restrepo") {
            className =
              "max-w-[102.5%] lg:max-w-[103%] 2xl:max-w-[102%] 2xl:w-[102%]";
          }

          if (teamMember.name === "Alejandro ossa") {
            className =
              "relative right-[7%] 2xl:right-[7%] 3xl:right-[4%] max-w-[112%]";
          }

          if (teamMember.name === "SARA lóPEZ") {
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
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-between lg:hidden">
        {orderedMembers.map((teamMember, index) => {
          let className;

          if (teamMember.name === "Esteban restrepo") {
            className =
              "max-w-[102.5%] lg:max-w-[103%] 2xl:max-w-[102%] 2xl:w-[102%]";
          }

          if (teamMember.name === "Alejandro ossa") {
            className =
              "relative right-[7%] 2xl:right-[7%] 3xl:right-[4%] max-w-[112%]";
          }

          if (teamMember.name === "SARA lóPEZ") {
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
