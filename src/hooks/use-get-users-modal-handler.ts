import { useState } from "react";

type BanModalData = {
  id: string;
  name: string;
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
