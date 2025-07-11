import type { JSX } from 'react';
import { Fragment, isValidElement, type ReactNode } from 'react';
import { nanoid } from 'nanoid';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';

import st from './styles.module.scss';
import type { Node } from './types';

export function parseJSONToElements(json: Node[]): {
  elements: ReactNode[];
  lastUpdate: string | null;
} {
  if (!Array.isArray(json))
    return { elements: [<Fragment key="empty" />], lastUpdate: null };

  let lastUpdate: string | null = null;
  const elements: ReactNode[] = [];

  if (
    json[0].type === 'paragraph' &&
    json[0].children?.some(child => child.text?.includes('Last Revised'))
  ) {
    lastUpdate =
      json[0].children?.find(child => child.text?.includes('Last Revised'))
        ?.text ?? null;

    json.shift();
  }

  elements.push(...json.map(parseNode));

  return { elements, lastUpdate };
}

function parseNode(node: Node, listStyle = {}): React.ReactNode {
  if (node.type === 'heading') {
    const Title = node.tag as JSX.ElementType;

    return <Title key={nanoid()}>{parseChildren(node.children)}</Title>;
  }

  if (node.type === 'paragraph') {
    const formattedChildren = node.children?.map(child => {
      if (child.type === 'text' && child.format === 1) {
        return (
          <span key={nanoid()} style={{ fontWeight: 600 }}>
            {child.text}
          </span>
        );
      }
      return parseChildren([child]);
    });

    return (
      <Text key={nanoid()} size="lg" style={{ lineHeight: 'normal' }}>
        {formattedChildren}
      </Text>
    );
  }

  if (node.type === 'link') {
    return (
      <a
        key={nanoid()}
        href={node.fields?.url}
        target={node.fields?.newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline', fontWeight: 600 }}
      >
        {parseChildren(node.children)}
      </a>
    );
  }

  if (node.type === 'list') {
    const listSt =
      node.listType === 'bullet'
        ? {
            listStyleType: 'disc',
            listPositionType: 'inside',
            marginLeft: '20px',
            color: '#3B3B35',
            lineHeight: 'normal',
          }
        : {
            listStyleType: 'decimal',
            marginLeft: '20px',
            color: '#3B3B35',
            lineHeight: 'normal',
          };

    return <ul key={nanoid()}>{parseChildren(node.children, listSt)}</ul>;
  }

  if (node.type === 'listitem') {
    const children = node.children || [];

    const formattedChildren = children.map(child => {
      if (child.type === 'text' && child.format === 1) {
        return (
          <span key={nanoid()} style={{ fontWeight: 600 }}>
            {child.text}
          </span>
        );
      }
      return parseChildren([child]);
    });

    return (
      <li key={nanoid()} style={listStyle}>
        {formattedChildren}
      </li>
    );
  }

  if (node.type === 'text') {
    return node.text;
  }

  if (node.type === 'linebreak') {
    return <br key={nanoid()} />;
  }

  return null;
}

function parseChildren(children?: Node[], listStyle = {}) {
  if (!Array.isArray(children)) return '';
  return children.map(child => parseNode(child, listStyle));
}

export function groupElementsByH3(elements: ReactNode[]) {
  const sections: ReactNode[] = [];
  let currentSection: ReactNode[] = [];

  elements.forEach(element => {
    if (isValidElement(element) && element.type === 'h3') {
      if (currentSection.length > 0) {
        sections.push(currentSection);
      }
      currentSection = [element];
    } else {
      currentSection.push(element);
    }
  });

  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  return sections.map((section, index) => (
    <section
      key={index}
      className={cn(st.section, {
        [st.sectionYellow]: index === sections.length - 1,
      })}
    >
      {section}
    </section>
  ));
}
