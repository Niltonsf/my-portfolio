import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { WorkContainer, WorkFilters } from "../../pages/Projects/styles";
import { projectsData, projectsNav } from "../../utils/ProjectsData";
import WorkItem from "../WorkItem";

export default function Works() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const mediumDevices = useMediaQuery("(max-width: 768px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState<any>([]);
  const [active, setActive] = useState(0);

  const handleClick = (e: any, index: number) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <>
      <WorkFilters smallDevices={smallDevices}>
        {projectsNav.map((nav, index) => {
          return (
            <span
              className={`${active === index ? "active-work" : ""} work_item`}
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
              {nav.name}
            </span>
          );
        })}
      </WorkFilters>

      <WorkContainer
        largeDevices={largeDevices}
        mediumDevices={mediumDevices}
        smallMediumDevices={smallMediumDevices}
      >
        {projects.map((item: any) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </WorkContainer>
    </>
  );
}
