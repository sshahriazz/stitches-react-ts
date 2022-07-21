import Button from "blocks/button";
import Grid from "blocks/grid";
import Loading from "blocks/loading";
import Spacer from "blocks/spacer";
import Text from "blocks/text";
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
      <p>size demo</p>
      <Button size="xs">Mini</Button>
      <Spacer y={0.5} />
      <Button size="sm">Small</Button>
      <Spacer y={0.5} />
      <Button>Medium</Button>
      <Spacer y={0.5} />
      <Button size="lg">Large</Button>
      <Spacer y={0.5} />
      <Button size="xl">Xlarge</Button>
      <Spacer y={0.5} />
      <Button auto>Auto Width</Button>
      <p>shadow & grid demo</p>
      <Grid.Container gap={2}>
        <Grid>
          <Button shadow color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="secondary" auto>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="success" auto>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="warning" auto>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="error" auto>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="gradient" auto>
            Gradient
          </Button>
        </Grid>
      </Grid.Container>
      <p>rounded</p>
      <Grid.Container gap={2}>
        <Grid>
          <Button auto color="primary" rounded>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button auto color="secondary" rounded flat>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button auto color="success" rounded bordered>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button auto color="warning" rounded flat>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button auto color="error" rounded bordered>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button auto color="gradient" rounded bordered>
            Gradient
          </Button>
        </Grid>
      </Grid.Container>
      <p>Button Container</p>
      <Grid.Container direction="column">
        <Grid xs={12}>
          <Button.Group size="xs">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </Grid>
        <Grid>
          <Button.Group size="sm">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </Grid>
        <Grid xs={12}>
          <Button.Group size="md">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </Grid>
        <Grid xs={12}>
          <Button.Group size="lg">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </Grid>
        <Grid xs={12}>
          <Button.Group size="xl">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>
        </Grid>
      </Grid.Container>
      <Text>Loading </Text>
      <Button.Group>
        <Button>
          <Loading color="white" size="sm" />
        </Button>
        <Button>
          <Loading type="spinner" color="white" size="sm" />
        </Button>
        <Button>
          <Loading type="points" color="white" size="sm" />
        </Button>
      </Button.Group>
      <p>Dark mode demo</p>

      <Button
        rounded
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
