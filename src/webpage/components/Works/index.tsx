import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "../../utils/ProjectsData";
import WorkItem from "../WorkItem";

export default function Works() {
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
      <div className="work_filters">
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
      </div>

      <div className="work_container container grid">
        {projects.map((item: any) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
