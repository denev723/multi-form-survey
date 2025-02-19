import "./App.css";
import Dropdown from "./components/common/Dropdown";
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
              <PannelHeader>
                <>
                  header
                  <Dropdown
                    options={[
                      { label: <div>1</div>, value: `1` },
                      { label: <div>2</div>, value: `2` },
                      { label: <div>3</div>, value: `3` },
                      { label: <div>4</div>, value: `4` },
                    ]}
                    onChange={(value) => console.log(value)}
                  />
                </>
              </PannelHeader>
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
