import { Link, useParams, useSearchParams } from "react-router-dom";
import Pannel, {
  PannelBody,
  PannelCap,
  PannelHeader,
} from "../components/common/Pannel";

export default function CompletePage() {
  const [searchParams] = useSearchParams();
  const { surveyId } = useParams<{ surveyId: string }>();
  return (
    <div>
      <PannelCap />
      <Pannel className="text-gray900">
        <PannelHeader className="text-24 mb-12 font-semibold">
          <h5>{searchParams.get("title") ?? "설문 완료"}</h5>
        </PannelHeader>
        <PannelBody>
          <p className="mb-17">응답이 기록되었습니다.</p>
          <Link
            className="border-b-blue-500 text-blue-500 border-b-1"
            to={`/surveys/${surveyId}`}
          >
            다른 응답 제출
          </Link>
        </PannelBody>
      </Pannel>
    </div>
  );
}
