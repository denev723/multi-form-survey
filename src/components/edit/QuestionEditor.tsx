import Input from "../common/Input";
import Pannel, {
  PannelBody,
  PannelFooter,
  PannelHeader,
} from "../common/Pannel";
import QuestionBodyEditor from "./QuestionBodyEditor";
import Question from "../../models/question";
import { observer } from "mobx-react-lite";
import QuestionTypeEditor from "./QuestionTypeEditor";

import CopyIcon from "../../assets/icons/filter_none.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import Divider from "../common/Divider";
import Switch from "../common/Switch";

interface Props {
  question: Question;
  onCopy: (id: number) => void;
  onDelete: (id: number) => void;
}

const QuestionEditor = observer(function QuestionEditor({
  question,
  onCopy,
  onDelete,
}: Props) {
  return (
    <Pannel className="border-l-10 border-l-transparent focus-within:border-l-main">
      <PannelHeader className="flex mb-25">
        <Input
          className="flex-1 mr-30"
          value={question.title}
          onChange={(e) => question.setTitle(e.currentTarget.value)}
        />
        <QuestionTypeEditor type={question.type} onChange={question.setType} />
      </PannelHeader>
      <PannelBody>
        <QuestionBodyEditor question={question} />
      </PannelBody>
      <PannelFooter className="flex justify-end gap-x-24 h-24 mt-20">
        <button onClick={() => onCopy(question.id)}>
          <CopyIcon />
        </button>
        <button onClick={() => onDelete(question.id)}>
          <DeleteIcon />
        </button>
        <Divider direction="vertical" />
        <div className="flex items-center">
          <span className="mr-13">필수</span>
          <Switch
            id={`${question.id}_switch`}
            checked={question.required}
            onChange={question.setRequired}
          />
        </div>
      </PannelFooter>
    </Pannel>
  );
});

export default QuestionEditor;
