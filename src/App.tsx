import Avatar from "blocks/avatar";
import Button from "blocks/button";
import Col from "blocks/col";
import Grid from "blocks/grid";
import Link from "blocks/link";
import Loading from "blocks/loading";
import Row from "blocks/row";
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
  const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  ];
  return (
    <>
      <Grid xs={12}>
        <Avatar.Group count={12}>
          {nameUsers.map((name, index) => (
            <Avatar key={index} size="lg" pointer text={name} stacked />
          ))}
        </Avatar.Group>
      </Grid>
      <Grid xs={12}>
        <Avatar.Group count={12}>
          {pictureUsers.map((url, index) => (
            <Avatar
              key={index}
              size="lg"
              pointer
              src={url}
              bordered
              color="gradient"
              stacked
            />
          ))}
        </Avatar.Group>
      </Grid>
      <Grid.Container gap={2}>
        <Grid>
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Grid>
        <Grid>
          <Avatar squared text="Junior" />
        </Grid>
        <Grid>
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </Grid>
        <Grid>
          <Avatar squared text="Jane" />
        </Grid>
        <Grid>
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        </Grid>
        <Grid>
          <Avatar squared text="Joe" />
        </Grid>
      </Grid.Container>

      <Row>
        <Link href="/">Hello</Link>
        <Button size="xs">Mini</Button>
        <Col>
          <Button size="sm">Small</Button>
        </Col>
        <Spacer y={0.5} />
        <Button>Medium</Button>
        <Spacer y={0.5} />
      </Row>

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
