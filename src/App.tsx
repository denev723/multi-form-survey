import "./App.css";
import MainLayout from "./components/common/MainLayout";
import Pannel, {
  PannelBody,
  PannelCap,
  PannelFooter,
  PannelHeader,
} from "./components/common/Pannel";
import Tabs, {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "./components/common/Tabs";

function App() {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>tab1</Tab>
          <Tab index={1}>tab2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <PannelCap>cap</PannelCap>
            <Pannel>
              <PannelHeader>header</PannelHeader>
              <PannelBody>body</PannelBody>
              <PannelFooter>footer</PannelFooter>
            </Pannel>
          </TabPanel>
          <TabPanel index={1}>panel2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
