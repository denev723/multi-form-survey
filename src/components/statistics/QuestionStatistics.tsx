import { Cell, Legend, Pie, PieChart, PieLabel } from "recharts";
import Question from "../../models/question";
import { QuestionData, SectionData, Statistics } from "../../types/app";
import Pannel, { PannelBody, PannelHeader } from "../common/Pannel";

interface Props {
  question: Question;
  statistics: Statistics[SectionData["id"]][QuestionData["id"]];
}

export default function QuestionStatistics({ question, statistics }: Props) {
  const typedStatistics = statistics as string[];
  if (question.type === "longText") {
    return (
      <Pannel className="text-gray900">
        <PannelHeader>
          <h6 className="text-17 font-medium mb-18">{question.title}</h6>
          <p className="text-gray800 text-16 mb-21">
            응답 {typedStatistics.length}개
          </p>
        </PannelHeader>
        <PannelBody className="flex flex-col gap-y-9">
          {typedStatistics.map((response, idx) =>
            response ? (
              <p
                key={idx}
                className="text-black text-15 font-medium p-17 rounded-10 bg-bg"
              >
                {response}
              </p>
            ) : null
          )}
        </PannelBody>
      </Pannel>
    );
  } else {
    const typedStatistics = statistics as Record<string, number>;
    const entries = Object.entries(typedStatistics);
    const total = entries.reduce((acc, [, count]) => acc + count, 0);

    return (
      <Pannel className="text-gray900">
        <PannelHeader>
          <h6 className="text-17 font-medium mb-18">{question.title}</h6>
          <p className="text-gray800 text-16 mb-21">응답 {total}개</p>
        </PannelHeader>
        <PannelBody className="flex flex-col gap-y-9 items-center">
          <PieChart width={410} height={250}>
            <Pie
              cx="35%"
              data={entries}
              nameKey={0}
              dataKey={1}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {entries.map(([key], index) => (
                <Cell key={key} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              align="right"
              verticalAlign="middle"
              layout="vertical"
              iconType="circle"
              iconSize={16}
            />
          </PieChart>
        </PannelBody>
      </Pannel>
    );
  }
}

const COLORS = ["#0D00A4", "#0D00A4CC", "#0D00A499", "#0D00A466", "#0D00A433"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel: PieLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
