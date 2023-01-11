import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { WorkCard, WorkImage, WorkTitle } from "../../pages/Projects/styles";

interface WorkItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    category: string;
    projectLink: string;
    description: string;
    difficulty: string;
  };
}

export default function WorkItem({ item }: WorkItemProps) {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");

  return (
    <WorkCard
      key={item.id}
      largeDevices={largeDevices}
      smallMediumDevices={smallMediumDevices}
    >
      <WorkImage src={item.image} alt="" largeDevices={largeDevices} />
      <WorkTitle largeDevices={largeDevices}>{item.title}</WorkTitle>
      <span className="work_subtitle">{item.description}</span>
      <span className="work_difficulty">
        <br></br>
        Difficulty: {item.difficulty}
      </span>
      <a
        href={item.projectLink}
        className="work_button"
        target="_blank"
        rel="noreferrer"
      >
        Learn more <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </WorkCard>
  );
}
