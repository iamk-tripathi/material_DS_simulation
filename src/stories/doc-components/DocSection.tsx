import type { CSSProperties, ReactNode } from 'react';

export interface DocSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const titleStyle: CSSProperties = {
  margin: 0,
  marginBottom: '8px',
  color: '#1C1B1F',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: 1.4,
};

const descriptionStyle: CSSProperties = {
  margin: 0,
  marginBottom: '16px',
  color: '#49454F',
  fontSize: '14px',
  lineHeight: 1.5,
};

const sectionStyle: CSSProperties = {
  marginBottom: '32px',
  paddingBottom: '32px',
  borderBottom: '1px solid #E7E0EC',
};

function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {description ? <p style={descriptionStyle}>{description}</p> : null}
      <div>{children}</div>
    </section>
  );
}

export default DocSection;
