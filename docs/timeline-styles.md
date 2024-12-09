# Timeline Component Styling Guide

The timeline component's styling is managed across three files that work together to create the final layout and animations.

## 1. Education.js
Main container component that:
- Defines the timeline configuration through `TIMELINE_CONFIG` object:
  ```js
  const TIMELINE_CONFIG = {
    scroll: {
      start: 0,
      end: { desktop: 0.7, tablet: 0.7, mobile: 0.8 }
    },
    line: {
      startHeight: "0%",
      endHeight: { mobile: "60%", tablet: "63%", desktop: "63%" },
      topPosition: { mobile: "5%", tablet: "7%", desktop: "7%" }
    }
  };
  ```
- Controls the timeline animation using Framer Motion
- Manages responsive behavior through `screenSize` state

## 2. Education.module.css
Handles the layout and positioning:
- `.timelineContainer`: Overall container layout
  - Desktop: Gap between items (`gap-y-48`)
  - Padding and minimum height

- `.timelineLine`: The vertical timeline line
  - Position: `left: 25%` on desktop
  - Width: 3px
  - Color: Uses RGB values from CSS variables

- `.timelineItem`: Individual item containers
  - Width: 75% on desktop
  - Positioning: `ml-[5%]` margin from timeline
  - Dot indicators: Positioned at `top: [17px]` to align with first text line

## 3. TimelineItem.js
Controls the styling of individual timeline entries: 

```css
.timeline-item {
display: grid;
gap: 16px;
min-width: 280px;
}
.school {
font-size: 32px;
color: var(--tw-color-primary);
}
.degree {
font-size: 26px;
max-width: 600px;
white-space: pre-line; /* Enables \n line breaks */
}
```

## Common Adjustments

### To adjust timeline position:
1. Modify `left` percentage in `Education.module.css`
2. Adjust `ml-[5%]` margin of timeline items
3. Update `TIMELINE_CONFIG.line.topPosition` values

### To adjust spacing between items:
1. Modify `gap-y-48` in `Education.module.css`
2. Update `TIMELINE_CONFIG.line.endHeight` values accordingly

### To adjust dot indicators:
1. Modify `top` value in `.timelineItem::before`
2. Adjust `w-4 h-4` classes for size

### To adjust text layout:
1. Modify gap and width values in `TimelineItem.js`
2. Adjust font sizes and max-width as needed