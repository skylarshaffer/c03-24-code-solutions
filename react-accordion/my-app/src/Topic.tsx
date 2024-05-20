type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  hidden: boolean;
  onHeadingClick: (id: number) => void;
};

export function Topic({ topic, hidden, onHeadingClick }: Props) {
  return (
    <div>
      <h2
        onClick={() => {
          onHeadingClick(Number(topic.id));
        }}>
        {topic.title}
      </h2>
      <p style={{ display: hidden ? '' : 'none' }}>{topic.content}</p>
    </div>
  );
}
