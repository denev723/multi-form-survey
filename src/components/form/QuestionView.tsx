import { useFormContext } from "react-hook-form";
import Question from "../../models/question";
import Pannel, { PannelBody, PannelHeader } from "../common/Pannel";
import QuestionForm from "./QuestionForm";
import cn from "classnames";

interface Props {
  question: Question;
}

export default function QuestionView({ question }: Props) {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <Pannel className={cn({ "border-red-500 border": errors[question.id] })}>
      <PannelHeader className="flex mb-31">
        <h6 className="text-16 text-gray900 font-medium">{question.title}</h6>
      </PannelHeader>
      <PannelBody>
        <QuestionForm question={question} />
        {errors[question.id] && (
          <p className="text-red-500 text-14 mt-10">
            {errors[question.id]?.message?.toString() || "필수 항목 입니다."}
          </p>
        )}
      </PannelBody>
    </Pannel>
  );
}
