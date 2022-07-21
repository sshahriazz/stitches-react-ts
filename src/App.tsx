import Button from "blocks/button";
import AppContext from "context/Context";
import useTheme from "hooks/use-theme";
import { useContext } from "react";
import { useSSRTheme } from "theme/ssr-provider";

function App() {
  const {
    config: { isDark },
    setConfig,
  } = useContext(AppContext);
  const { type } = useTheme();
  const { setTheme } = useSSRTheme();

  return (
    <>
      <Button
        shadow
        color="primary"
        size={"lg"}
        onPress={() => {
          setTheme(isDark ? "dark" : "light");
          setConfig("isDark", !isDark);
        }}
      >
        {type}
      </Button>
    </>
  );
}

export default App;
