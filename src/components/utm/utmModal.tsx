import React from "react";
import { Modal } from "../ui/modal";
import UTMDashboard from "./utmDashboard";
import UTMBuilder from "./utmBuilder";

type AgendaMOdalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const UtmModal = ({ isOpen, closeModal }: AgendaMOdalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <UTMBuilder />
    </Modal>
  );
};

export default UtmModal;
