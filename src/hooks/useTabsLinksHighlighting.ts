import {SyntheticEvent, useLayoutEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const useTabsLinksHighlighting = (initialRoute: string) => {
  const [tabValue, setTabValue] = useState(initialRoute);
  const location = useLocation();

  useLayoutEffect(() => {
    const endOfPath = location.pathname.split("/").slice(-1).join("");
    setTabValue(endOfPath);
  }, [location]);

  const handleTabValueChange = (
    e: SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setTabValue(newValue);
  };
  return [tabValue, handleTabValueChange] as [
    string,
    (e: SyntheticEvent<Element, Event>, newValue: string) => void
  ];
};
