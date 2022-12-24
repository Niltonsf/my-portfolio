import React from "react";
import { useControls } from "leva";

export default function useLevaControls() {
  const { showPerformace } = useControls(
    "Performaces",
    {
      showPerformace: false,
    },
    {
      collapsed: true,
    }
  );

  const { viewWebpage } = useControls("View Webpage", {
    viewWebpage: {
      value: false,
    },
  });

  return {
    viewWebpage,
    showPerformace,
  };
}
