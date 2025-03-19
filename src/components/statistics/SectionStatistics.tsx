import Section from "../../models/section";
import { SectionData, Statistics } from "../../types/app";
import QuestionStatistics from "./QuestionStatistics";
import SectionTitleView from "./SectionTitleView";

interface Props {
  capTitle: string;
  section: Section;
  statistics: Statistics[SectionData["id"]];
}

export default function SectionStatistics({
  section,
  statistics,
  capTitle,
}: Props) {
  return (
    <div className="[&>*]:mb-24">
      <SectionTitleView section={section} capTitle={capTitle} />
      {section.questions.map((question) => (
        <QuestionStatistics
          key={question.id}
          question={question}
          statistics={statistics[question.id]}
        />
      ))}
    </div>
  );
}
