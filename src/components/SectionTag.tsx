import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Tag } from './Tag';

interface SectionTagProps {
  text: string;
  icon?: LucideIcon;
}

export function SectionTag({ text, icon }: SectionTagProps) {
  return <Tag icon={icon} size="md" variant="default">{text}</Tag>;
}
