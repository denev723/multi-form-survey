import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import Input from "../common/Input";
import Pannel, { PannelBody, PannelCap } from "../common/Pannel";

interface Props {
  capTitle: string;
  section: Section;
}

const SectionTitleEditor = observer(function SectionTitleEditor({
  section,
  capTitle,
}: Props) {
  return (
    <div>
      <PannelCap>{capTitle}</PannelCap>
      <Pannel>
        <PannelBody className="flex flex-col">
          <Input
            value={section.title}
            onChange={(e) => section.setTitle(e.currentTarget.value)}
            className="mb-17 text-24 text-gray900 font-semibold py-8"
          />
          <Input
            value={section.description}
            onChange={(e) => section.setDescription(e.currentTarget.value)}
            className="text-16 text-gray700 py-3"
          />
        </PannelBody>
      </Pannel>
    </div>
  );
});

export default SectionTitleEditor;
