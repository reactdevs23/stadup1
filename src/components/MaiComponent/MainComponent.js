import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  date,
  dateColor,
  heading,
  headingColor,
  impediment,
  data,
  yesterday,
  today,

  border,
}) => {
  const calculatePosition = (index, totalImages, radius) => {
    const angle = (360 / totalImages) * index - 90;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  let wrapperSize = 670; // Set the desired size of the circular wrapper
  const radius = wrapperSize / 2;

  const renderImages = (data) => {
    return data.map((el, index) => {
      const totalImages = data.length;
      const baseRadius = radius * 1;
      const { x, y } = calculatePosition(index, totalImages, baseRadius);
      const transformStyle = {
        transform: `translate(${x + 6}px, ${y}px)`,
      };

      return (
        <li key={index} style={transformStyle}>
          <div
            className={[classes.nameContainer].join(" ")}
            style={{
              "--bg": el.background,
              "--border": el.border,
              "--color": el.color,
            }}
          >
            <p className={classes.name}> {el.name}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div
      className={classes.mainContainer}
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.leftSide}>
          <div className={classes.headingContainer}>
            <p className={classes.date} style={{ "--color": dateColor }}>
              {date}
            </p>
            <h3 className={classes.heading} style={{ "--color": headingColor }}>
              {heading}
            </h3>
          </div>
          <div className={classes.impediment}>
            <p
              className={classes.title}
              style={{ "--color": impediment.titleColor }}
            >
              {" "}
              <span>{impediment.icon}</span> {impediment.title}
            </p>
            {impediment.lists.map((list, i) => (
              <div className={classes.list} key={i}>
                <p
                  className={classes.info}
                  style={{ "--color": list.infoColor }}
                >
                  {list.info}
                </p>
                <div className={classes.nameWrapper}>
                  {list.names.map((el, nameKey) => (
                    <p
                      className={classes.name}
                      key={nameKey}
                      style={{ "--bg": el.bg, "--color": el.color }}
                    >
                      {el.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={classes.wrapper}
          style={{
            width: wrapperSize,
            height: wrapperSize,
            borderRadius: "50%",
            "--border": border,
          }}
        >
          <div className={classes.orbit}>
            <ul>
              {data.length > 0 && (
                <ul className={classes.secondOrbit}>
                  {renderImages(data, true)}
                </ul>
              )}
            </ul>
          </div>
          <div className={classes.content}>
            <h4
              className={classes.topTitle}
              style={{
                "--bg": yesterday.titleBackground,
                "--titleColor": yesterday.titleColor,
                "--boxShadow": yesterday.titleBoxShadow,
              }}
            >
              {yesterday.title}
            </h4>
            <div
              className={classes.box}
              style={{
                "--border": yesterday.border,
                "--boxShadow": yesterday.boxShasow,
                "--bg": yesterday.background,
              }}
            >
              {yesterday.lists.map((list, i) => (
                <div className={classes.list} key={i}>
                  <p
                    className={classes.info}
                    style={{ "--color": list.infoColor }}
                  >
                    {list.info}
                  </p>
                  <div className={classes.nameWrapper}>
                    {list.names.map((el, nameKey) => (
                      <p
                        className={classes.name}
                        key={nameKey}
                        style={{ "--bg": el.bg, "--color": el.color }}
                      >
                        {el.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>{" "}
            <div
              className={classes.box}
              style={{
                "--border": today.border,
                "--boxShadow": today.boxShasow,
                "--bg": today.background,
              }}
            >
              {today.lists.map((list, i) => (
                <div className={classes.list} key={i}>
                  <p
                    className={classes.info}
                    style={{ "--color": list.infoColor }}
                  >
                    {list.info}
                  </p>
                  <div className={classes.nameWrapper}>
                    {list.names.map((el, nameKey) => (
                      <p
                        className={classes.name}
                        key={nameKey}
                        style={{ "--bg": el.bg, "--color": el.color }}
                      >
                        {el.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <h4
              className={classes.topTitle}
              style={{
                "--bg": today.titleBackground,
                "--titleColor": today.titleColor,
                "--boxShadow": today.titleBoxShadow,
              }}
            >
              {today.title}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
