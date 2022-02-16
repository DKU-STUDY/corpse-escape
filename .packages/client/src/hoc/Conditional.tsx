import React, { ReactNode } from "react";

interface Props {
  condition: unknown;
  children: ReactNode;
}

const Conditional: React.FC<Props> = ({ condition, children }) => {
  if (!condition) return null;
  return <>{children}</>;
};

export default React.memo(Conditional);
