import "./App.css";
import MainLayout from "./components/common/MainLayout";
import Tabs, {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "./components/common/Tabs";
import QuestionEditor from "./components/edit/QuestionEditor";

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
            <QuestionEditor />
          </TabPanel>
          <TabPanel index={1}>panel2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
