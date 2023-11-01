import { Dialog } from "primereact/dialog";
import { FC, PropsWithChildren } from "react";

type Props = {
  footer?: React.ReactNode;
  header: string;
  onHide: () => void;
  visible: boolean;
};
const PRODialog: FC<PropsWithChildren<Props>> = ({
  children,
  footer,
  header,
  onHide,
  visible,
}) => {
  return (
    <Dialog
      className="w-full max-w-md"
      dismissableMask
      blockScroll
      footer={footer}
      header={header}
      onHide={onHide}
      visible={visible}
    >
      <p className="m-0">{children}</p>
    </Dialog>
  );
};

export default PRODialog;
