import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  createContext,
  useContext,
} from "react";
import styled, { css } from "styled-components";

// =========================
// Context Definition
// =========================

type CarouselContextProps = {
  currentIndex: number;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
  itemsCount: number;
  setItemsCount: React.Dispatch<React.SetStateAction<number>>;
};

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// =========================
// Main Carousel Component
// =========================

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  orientation = "horizontal",
  className,
  children,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(itemsCount - 1, prev + 1));
  }, [itemsCount]);

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < itemsCount - 1;

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (orientation === "horizontal") {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      }
    },
    [scrollPrev, scrollNext, orientation]
  );

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        orientation,
        itemsCount,
        setItemsCount,
      }}
    >
      <CarouselWrapper
        onKeyDown={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        className={className}
        {...props}
      >
        {children}
      </CarouselWrapper>
    </CarouselContext.Provider>
  );
};

// =========================
// Carousel Content
// =========================

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CarouselContent: React.FC<CarouselContentProps> = ({
  className,
  children,
  ...props
}) => {
  const { currentIndex, setItemsCount } = useCarousel();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const count = React.Children.count(children);
    setItemsCount(count);
  }, [children, setItemsCount]);

  const centerToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    const row = rowRef.current;
    const item = itemRefs.current[index];
    if (!container || !row || !item) return;

    const containerHalf = container.clientWidth / 2;
    const itemCenterWithinRow = item.offsetLeft + item.clientWidth / 2;
    const rowLeftWithinContainer = row.offsetLeft;
    const desired = containerHalf - (rowLeftWithinContainer + itemCenterWithinRow);
    setTranslateX(desired);
  }, []);

  useEffect(() => {
    centerToIndex(currentIndex);
  }, [currentIndex, children, centerToIndex]);

  useEffect(() => {
    const onResize = () => centerToIndex(currentIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentIndex, centerToIndex]);

  return (
    <ContentWrapper className={className} {...props} ref={containerRef}>
      <ItemsRow ref={rowRef} $translateX={translateX}>
        {React.Children.map(children, (child, index) => (
          <ItemWrapper
            key={index}
            ref={(el: HTMLDivElement | null) => {
              if (el) itemRefs.current[index] = el;
            }}
            $isActive={index === currentIndex}
            $isNext={index === currentIndex + 1}
            $isPrev={index === currentIndex - 1}
          >
            {child}
          </ItemWrapper>
        ))}
      </ItemsRow>
    </ContentWrapper>
  );
};

// =========================
// Carousel Item
// =========================

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <InnerItem className={className} {...props}>
      {children}
    </InnerItem>
  );
};

// =========================
// Navigation Buttons
// =========================

interface CarouselButtonProps {
  className?: string;
}

export const CarouselPrevious: React.FC<CarouselButtonProps> = ({
  className,
}) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={className}
      aria-label="Previous slide"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
        <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export const CarouselNext: React.FC<CarouselButtonProps> = ({
  className,
}) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={className}
      aria-label="Next slide"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

// =========================
// Styled Components
// =========================

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  --carousel-item-basis: 46;
  --carousel-gap: 96px;
  --carousel-arrow-size: 52px;
  /* Keep edge offset in sync with side padding so arrows sit at edges */
  --carousel-edge-offset: 0px;

  /* padding-left: 96px;
  padding-right: 96px; */

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    --carousel-item-basis: 60;
    --carousel-gap: 72px;
    --carousel-edge-offset: 72px;
    padding-left: 72px;
    padding-right: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    --carousel-item-basis: 85;
    --carousel-gap: 32px;
    --carousel-edge-offset: 24px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 480px) {
    --carousel-item-basis: 95;
    --carousel-gap: 24px;
    --carousel-edge-offset: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  touch-action: pan-y;
  user-select: none;
`;

const ItemsRow = styled.div<{$translateX: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--carousel-gap);
  transform: translate3d(${({ $translateX }) => $translateX}px, 0, 0);
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const ItemWrapper = styled.div<{
  $isActive: boolean;
  $isNext: boolean;
  $isPrev: boolean;
}>`
  flex: 0 0 calc(var(--carousel-item-basis) * 1%);
  margin: 0;
  opacity: 0.7;
  transition: opacity 0.5s ease;
  z-index: 1;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      z-index: 2;
    `}

  ${({ $isNext, $isPrev }) =>
    ($isNext || $isPrev) &&
    css`
      opacity: 0.85;
    `}
`;

const InnerItem = styled.div`
  border-radius: 0;
  overflow: visible;
`;

/* No shared NavButton; section components fully style and position their own buttons */

// =========================
// Section-specific nav components
// =========================

export const ProjectCarouselPrevious = styled(CarouselPrevious)`
  position: absolute;
  top: var(--carousel-arrows-top, 50%);
  /* center gap: center - half card width - half gap - half arrow size */
  left: calc(
    50% - (var(--carousel-item-basis) * 0.9%) - (var(--carousel-gap) / 2) - (var(--carousel-arrow-size) / 2) + var(--carousel-arrow-extra-left)
  );
  transform: translateY(-50%);
  z-index: 1000;
  width: var(--carousel-arrow-size);
  height: var(--carousel-arrow-size);

  & {
    background: ${({ theme }) => theme.colors.accent.mint};
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    box-shadow: ${({ theme }) => theme.shadows.base};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover:not(:disabled) { box-shadow: none; }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  svg {
    stroke-width: 2;
  }
`;

export const ProjectCarouselNext = styled(CarouselNext)`
  position: absolute;
  top: var(--carousel-arrows-top, 50%);
  /* center gap: center - half card width - half gap - half arrow size (mirrored) */
  right: calc(
    50% - (var(--carousel-item-basis) * 0.9%) - (var(--carousel-gap) / 2) - (var(--carousel-arrow-size) / 2) + var(--carousel-arrow-extra-right)
  );
  transform: translateY(-50%);
  z-index: 1000;
  width: var(--carousel-arrow-size);
  height: var(--carousel-arrow-size);

  & {
    background: ${({ theme }) => theme.colors.accent.mint};
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    box-shadow: ${({ theme }) => theme.shadows.base};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover:not(:disabled) {
    transform: translateY(-50%) translate(4px, 4px);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  svg {
    stroke-width: 2;
  }
`;

export const SkillsCarouselPrevious = styled(CarouselPrevious)`
  --carousel-arrow-size: 48px;
`;

export const SkillsCarouselNext = styled(CarouselNext)`
  --carousel-arrow-size: 48px;
`;