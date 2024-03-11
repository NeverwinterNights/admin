import { useState } from "react";

export type BanModalData = {
  id: string;
  name: string;
  ban?: boolean;
};
export const useGetUsersModalHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const [activeModalData, setActiveModalData] = useState<BanModalData>(
    {} as BanModalData,
  );

  return {
    isModalOpen,
    setIsModalOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    activeModalData,
    setActiveModalData,
  };
};
