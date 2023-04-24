import {useCallback, useState} from "react";

type SetToTrueHandler = () => void;
type SetToFalseHandler = () => void;
type ToggleHandler = () => void;

export const useBooleanState = (
  initialState: boolean | (() => boolean) = false
): readonly [boolean, SetToTrueHandler, SetToFalseHandler, ToggleHandler] => {
  const [state, setState] = useState(initialState);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const toggleState = useCallback(() => setState(!state), []);

  return [state, setTrue, setFalse, toggleState] as const;
};
