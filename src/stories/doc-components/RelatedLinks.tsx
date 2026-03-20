import type { CSSProperties } from 'react';

export interface RelatedLinkItem {
  label: string;
  href: string;
  description?: string;
}

export interface RelatedLinksProps {
  links: RelatedLinkItem[];
}

const titleStyle: CSSProperties = {
  margin: 0,
  marginBottom: '12px',
  color: '#1C1B1F',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: 1.4,
};

const linksStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '12px',
};

const cardStyle: CSSProperties = {
  border: '1px solid #E7E0EC',
  borderRadius: '8px',
  padding: '12px 16px',
  backgroundColor: '#FFFFFF',
  boxSizing: 'border-box',
};

const linkStyle: CSSProperties = {
  color: '#6750A4',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1.4,
  textDecoration: 'none',
};

const descriptionStyle: CSSProperties = {
  margin: 0,
  marginTop: '4px',
  color: '#49454F',
  fontSize: '12px',
  lineHeight: 1.4,
};

function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <div>
      <h3 style={titleStyle}>Related Components</h3>
      <div style={linksStyle}>
        {links.map((link) => (
          <div key={`${link.label}-${link.href}`} style={cardStyle}>
            <a href={link.href} style={linkStyle}>
              {link.label}
            </a>
            {link.description ? <p style={descriptionStyle}>{link.description}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedLinks;
