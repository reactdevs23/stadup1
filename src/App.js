import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import CloseIcon from "./images/CloseIcon";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    circleBorder: "18px solid #F2F4F7",
    background: "#fff",
    date: "Thursday, 8. Feb 2024",
    dateColor: "#155EEF",
    heading: "Daily Stand Up",
    headingColor: "#000",
    impediment: {
      title: "Impediments",
      titleColor: "#D92D20",
      icon: <CloseIcon color="#D92D20" />,

      lists: [
        {
          info: "Blocker Short Description",
          infoColor: "#000",
          names: [{ name: "Zp", color: "#fff", bg: "#7F56D9" }],
        },
        {
          info: "Blocker Lorem Ipsum",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
          ],
        },
        {
          info: "Blocker Dolor Sit Amet",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Blocker Short Description",
          infoColor: "#000",
          names: [{ name: "Zp", color: "#fff", bg: "#088AB2" }],
        },
        {
          info: "Blocker Lorem Ipsum",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#088AB2" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Blocker Dolor Sit Amet",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#088AB2" },
          ],
        },
      ],
    },
    data: [
      {
        name: "CW",
        color: "#fff",
        background: "#7F56D9",
        border: "12px solid #DBD4F1",
      },
      {
        name: "ZP",
        color: "#fff",
        background: "#444CE7",
        border: "12px solid #DADBFA",
      },
      {
        name: "BZ",
        color: "#fff",
        background: "#155EEF",
        border: "12px solid #D0DFFC",
      },

      {
        name: "RT",
        color: "#fff",
        background: "#155EEF",
        border: "12px solid #D0DFFC",
      },
      {
        name: "BV",
        color: "#fff",
        background: "#0086C9",
        border: "12px solid #C6E1F0",
      },
      {
        name: "Mk",
        color: "#fff",
        background: "#0086C9",
        border: "12px solid #C6E1F0",
      },
      {
        name: "UV",
        color: "#fff",
        background: "#0E9384",
        border: "12px solid #CFE9E6",
      },

      {
        name: "AP",
        color: "#fff",
        background: "#0E9384",
        border: "12px solid #CFE9E6",
      },
    ],
    yesterday: {
      title: "Yesterday",
      titleColor: "#fff",
      titleBackground: "#344054",
      titleBoxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      border: "1px solid #D0D5DD",
      boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      background: "#fff",
      lists: [
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
      ],
    },
    today: {
      title: "TODAY",
      titleColor: "#fff",
      titleBackground: "#344054",
      titleBoxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      border: "1px solid #D0D5DD",
      boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      background: "#fff",
      lists: [
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
      ],
    },
  });

  return (
    <div
      style={{
        fontFamily: allData.fontFamily,
        background: allData.background,
      }}
    >
      <MainComponent {...allData} border={allData.circleBorder} />
    </div>
  );
}

export default App;
