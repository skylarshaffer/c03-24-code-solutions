type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  hidden: boolean;
  onDivClick: (value: number) => void;
};

export function Topic({ topic, hidden, onDivClick }: Props) {
  return (
    <div
      onClick={() => {
        onDivClick(Number(topic.id));
      }}>
      <h2>{topic.title}</h2>
      <p style={{ display: hidden ? '' : 'none' }}>{topic.content}</p>
    </div>
  );
}
