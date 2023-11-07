import { useState } from "react";
import "./imgEditor.css";
// import UploadAndDisplayImage from "./imgUpload";

const data = {
  image: "https://www.w3schools.com/w3images/sound.jpg",
  settings: [
    {
      name: "contrast",
      value: "100%",
    },
    {
      name: "hue",
      value: "0deg",
    },
    {
      name: "brightness",
      value: "100%",
    },
    {
      name: "saturate",
      value: "100%",
    },
    {
      name: "sepia",
      value: "0%",
    },
    {
      name: "invert",
      value: "0%",
    },
  ],
};

function ImageEditor() {
  const [settings, setSettings] = useState(data.settings);

  const handleChange = (name, value) => {
    const updatedSettings = settings.map((setting) => {
      if (setting.name === name) {
        setting.value = value;
      }
      return setting;
    });
    setSettings(updatedSettings);
  };

  return (
    <div className="settings">
      <Settings settings={settings} url={data.image} onChange={handleChange} />
    </div>
  );
}

function Settings({ settings, url, onChange }) {
  return (
    <div className="contentWrap">
      <div className="sidebar">
        <div className="title">Filters</div>
        {settings.map((setting, index) => (
          <div className="setting" key={index}>
            <label className="filterName">
              <div>{setting.name}</div>
              <div>{setting.value}</div>
            </label>
            {setVal(setting, onChange)}
          </div>
        ))}
      </div>
      <Image url={url} settings={settings} />
    </div>
  );
}

function setVal(setting, onChange) {
  switch (setting.name) {
    case "contrast":
      return (
        <input
          type="range"
          step="1"
          min="0"
          max="200"
          id={setting.name}
          onChange={(e) => onChange(setting.name, e.target.value + "%")}
          defaultValue={setting.value}
        />
      );
    case "hue":
      return (
        <input
          type="range"
          step="1"
          min="0"
          max="360"
          id={setting.name}
          onChange={(e) => onChange(setting.name, e.target.value + "deg")}
          defaultValue={setting.value}
        />
      );
    case "brightness":
      return (
        <input
          type="range"
          step="1"
          min="0"
          max="200"
          id={setting.name}
          onChange={(e) => onChange(setting.name, e.target.value + "%")}
          defaultValue={setting.value}
        />
      );
    case "saturate":
      return (
        <input
          type="range"
          step="1"
          min="0"
          max="100"
          id={setting.name}
          onChange={(e) => onChange(setting.name, e.target.value + "%")}
          defaultValue={setting.value}
        />
      );
    case "sepia":
      return (
        <input
          type="range"
          step="1"
          min="0"
          max="100"
          id={setting.name}
          onChange={(e) => onChange(setting.name, e.target.value + "%")}
          defaultValue={setting.value}
        />
      );
    case "invert":
      return (
        <input
          type="range"
          step="1"
          min="0"
          max="100"
          id={setting.name}
          onChange={(e) => onChange(setting.name, e.target.value + "%")}
          defaultValue={setting.value}
        />
      );
    default:
      return <input type="range" />;
  }
}

function Image({ url, settings }) {
  const imgStyle = {
    filter: `contrast(${settings[0].value}) hue-rotate(${settings[1].value}) brightness(${settings[2].value}) saturate(${settings[3].value}) sepia(${settings[4].value}) invert(${settings[5].value})`,
    backgroundImage: `url(${url})`,
  };

  return (
    <div className="imageContainer">
      <img className="guitar" style={imgStyle} />
    </div>
  );
}

export default ImageEditor;
