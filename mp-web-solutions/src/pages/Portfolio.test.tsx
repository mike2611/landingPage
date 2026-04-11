import { render, screen, within } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Portfolio from './Portfolio';

const stripMotionProps = <T extends Record<string, unknown>>(props: T) => {
  const omit = new Set([
    'initial',
    'animate',
    'transition',
    'variants',
    'exit',
    'whileHover',
    'whileTap',
  ]);
  return Object.fromEntries(
    Object.entries(props).filter(([k]) => !omit.has(k)),
  ) as T;
};

vi.mock('motion/react', () => {
  const MotionDiv = ({
    children,
    ...rest
  }: ComponentProps<'div'>) => (
    <div {...stripMotionProps(rest)}>{children}</div>
  );
  const MotionArticle = ({
    children,
    ...rest
  }: ComponentProps<'article'>) => (
    <article {...stripMotionProps(rest)}>{children}</article>
  );
  return {
    motion: {
      div: MotionDiv,
      article: MotionArticle,
    },
  };
});

describe('Portfolio', () => {
  it('renders the page heading and intro', () => {
    render(<Portfolio />);
    expect(
      screen.getByRole('heading', { level: 1, name: /portafolio/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/arquitectura de precisión/i),
    ).toBeInTheDocument();
  });

  it('renders a bento card for each project with title and description', () => {
    render(<Portfolio />);
    const projects: { title: string; snippet: RegExp }[] = [
      {
        title: 'Orquestación de Medios AI',
        snippet: /arquitectura asíncrona/i,
      },
      {
        title: 'Ingeniería de Carga Instantánea',
        snippet: /mientras el estándar/i,
      },
      {
        title: 'Visión Artificial Agroindustrial',
        snippet: /agente inteligente/i,
      },
      {
        title: 'Infraestructura en Piloto Automático',
        snippet: /eliminamos el cuello de botella manual/i,
      },
    ];
    for (const { title, snippet } of projects) {
      const heading = screen.getByRole('heading', { level: 2, name: title });
      expect(heading).toBeInTheDocument();
      const article = heading.closest('article');
      expect(article).not.toBeNull();
      expect(within(article as HTMLElement).getByText(snippet)).toBeInTheDocument();
    }
  });

  it('shows the performance metric on the load-instant card', () => {
    render(<Portfolio />);
    expect(screen.getByText('99+')).toBeInTheDocument();
    expect(
      screen.getByText(/lighthouse score/i),
    ).toBeInTheDocument();
  });

  it('renders stack tags when no metric is present', () => {
    render(<Portfolio />);
    expect(screen.getByText('FastAPI')).toBeInTheDocument();
    expect(screen.getByText('YOLO')).toBeInTheDocument();
    expect(screen.getByText('n8n')).toBeInTheDocument();
  });
});
