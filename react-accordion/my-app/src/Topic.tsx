type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  hidden: boolean;
  onDivClick: (event: React.MouseEvent<HTMLHeadingElement>) => void;
};

export function Topic({ topic, hidden, onDivClick }: Props) {
  return (
    <div id={topic.id.toString()} onClick={onDivClick}>
      <h2>{topic.title}</h2>
      <p style={{ display: hidden ? '' : 'none' }}>{topic.content}</p>
    </div>
  );
}
