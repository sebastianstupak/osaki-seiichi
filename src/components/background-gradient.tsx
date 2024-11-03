// BackgroundGradient.tsx
import React from "react";
import styles from "./background-gradient.module.css";

interface Section {
  color: string;
  height: string;
  children?: React.ReactNode;
}

interface BackgroundGradientProps {
  sections?: Section[];
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  sections = [
    {
      color: "#cbd671",
      height: "120vh",
      children: null,
    },
    {
      color: "#c2d1d6",
      height: "100vh",
      children: null,
    },
  ],
}) => {
  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={styles.section}
          style={{
            height: section.height,
            background:
              index < sections.length - 1
                ? `linear-gradient(${section.color} 75%, ${
                    sections[index + 1].color
                  })`
                : section.color,
          }}
        >
          <div className={styles.contentContainer}>{section.children}</div>
        </div>
      ))}
      <div className={styles.grainOverlay}>
        <div className={styles.grainTexture} />
      </div>
    </div>
  );
};

export default BackgroundGradient;
