import { FormProvider, useForm } from "react-hook-form";
import Section from "../../models/section";
import SectionTitleView from "./SectionTitleView";
import QuestionView from "./QuestionView";
import Button from "../common/Button";

interface Props {
  section: Section;
  last: boolean;
  onSave: (data: object) => void;
  onNext: () => void;
}

export default function SectionView({ section, last, onSave, onNext }: Props) {
  const method = useForm();
  const handleSubmitData = (data: object) => {
    onSave(data);
    onNext();
  };

  return (
    <FormProvider {...method}>
      <form
        className="text-gray900 [&>*]:mb-24"
        onSubmit={method.handleSubmit(handleSubmitData)}
      >
        <SectionTitleView section={section} />
        {section.questions.map((question) => (
          <QuestionView key={question.id} question={question} />
        ))}
        <Button type="submit">{last ? "제출" : "다음"}</Button>
      </form>
    </FormProvider>
  );
}
