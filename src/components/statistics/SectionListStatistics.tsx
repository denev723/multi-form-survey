import Section from "../../models/section";
import { Statistics } from "../../types/app";
import SectionStatistics from "./SectionStatistics";

interface Props {
  sections: Section[];
  statistics: Statistics;
  count: number;
}

export default function SectionListStatistics({ sections, statistics }: Props) {
  return sections.map((section, idx) => (
    <SectionStatistics
      key={section.id}
      section={section}
      statistics={statistics[section.id]}
      capTitle={`${sections.length}개 중 ${idx + 1}섹션`}
    />
  ));
}
