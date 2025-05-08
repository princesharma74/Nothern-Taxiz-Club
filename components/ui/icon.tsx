import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
  className?: string;
}) => {
  // Make sure the name exists in the Icons object
  if (!(name in Icons)) {
    console.error(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  const LucideIcon = Icons[name] as React.FC<LucideProps>;

  return <LucideIcon color={color} size={size} className={className} />;
};