import { useRef, useState } from "react";
import { useSurveyStore } from "../../store";
import SectionView from "./SectionView";
import { observer } from "mobx-react-lite";

const SectionListView = observer(function SectionListView() {
  const surveyStore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState(0);
  const last = currentSection === surveyStore.sections.length - 1;

  const data = useRef<object[]>([]);
  const handleNext = () => {
    if (last) {
      //submit
      console.log(data.current);
      return;
    }
    setCurrentSection(currentSection + 1);
  };
  const saveData = (sectionData: object) => {
    data.current[currentSection] = sectionData;
  };

  return (
    <SectionView
      section={surveyStore.sections[currentSection]}
      last={last}
      onSave={saveData}
      onNext={handleNext}
    />
  );
});

export default SectionListView;
