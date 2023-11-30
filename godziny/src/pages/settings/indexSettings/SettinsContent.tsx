import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";

const SettinsContent = () => {
    return (
      <div
        className="bg-white p-2 py-4 p-sm-4 w-100"
        style={{
          height: "100%",
          overflow: "hidden auto",
          outline: "4px solid white",
        }}
      >
        <div
          style={{
            maxWidth: "480px",
            width: "100%",
          }}
        >
          <SettingsMonthsList />
          <div className="border my-4"></div>
          <SettingsUsersList />
        </div>
      </div>
    );
};

export default SettinsContent;