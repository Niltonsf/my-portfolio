import { button, useControls } from "leva";
import { useNavigate } from "react-router-dom";

export default function useLevaControls() {
  const navigate = useNavigate();

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
    normalSite: button(() => navigate("/static")),
  });

  return {
    viewWebpage,
    showPerformace,
  };
}
