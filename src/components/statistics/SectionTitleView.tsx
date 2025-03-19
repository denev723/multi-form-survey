import Section from "../../models/section";
import Pannel, { PannelBody, PannelCap } from "../common/Pannel";

interface Props {
  capTitle: string;
  section: Section;
}

export default function SectionTitleView({ section, capTitle }: Props) {
  return (
    <div>
      <PannelCap>{capTitle}</PannelCap>
      <Pannel>
        <PannelBody className="flex flex-col">
          <h4 className="mb-17 text-24 text-gray900 font-semibold">
            {section.title}
          </h4>
          <p className="text-16 text-gray700">{section.description}</p>
        </PannelBody>
      </Pannel>
    </div>
  );
}
