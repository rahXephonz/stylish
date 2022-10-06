import { useCallback, useState } from "react";

export const usePopup = (defaultValue?: boolean) => {
  // trigger that will used
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue || false);

  // onOpen is action what you triggering in components
  const onOpen = useCallback(() => setIsOpen(true), []);

  // onClose is action that wil close what you triggering before
  const onClose = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export const useToggle = (defaultValue?: boolean) => {
  // trigger that will used
  const [isToggle, setIsToggle] = useState<boolean>(defaultValue || false);

  // toggling action in components
  const onToggle = useCallback(() => setIsToggle(prevVal => !prevVal), []);

  return [isToggle, onToggle];
};
