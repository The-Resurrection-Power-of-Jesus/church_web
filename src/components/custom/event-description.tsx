"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";

type EventDescriptionProps = {
  children: ReactNode;
};

const hasOverflow = (element: HTMLElement) =>
  element.scrollHeight > element.clientHeight + 1;

export function EventDescription({ children }: EventDescriptionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    let frame = 0;
    const update = () => {
      if (expanded) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!contentRef.current) return;
        setCanExpand(hasOverflow(contentRef.current));
      });
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [expanded]);

  return (
    <div>
      <div ref={contentRef} className={expanded ? undefined : "line-clamp-6"}>
        {children}
      </div>
      {canExpand ? (
        <button
          type="button"
          className="mt-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
