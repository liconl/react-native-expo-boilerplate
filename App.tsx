import { useEffect, useState } from "react";
import { Auth } from "./screens";
import BottomTab from "./navigation/BottomTab";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  const [authKey, setAuthKey] = useState<string | null>("SUCCESS");

  useEffect(() => {
    handleRenderStatus();
  }, [authKey]);

  const handleRenderStatus = () => {
    if (authKey === "SUCCESS") {
      return <BottomTab />;
    } else {
      return <Auth getAuthKey={setAuthKey} />;
    }
  };
  return <Provider store={configureStore}>{handleRenderStatus()}</Provider>;
}
