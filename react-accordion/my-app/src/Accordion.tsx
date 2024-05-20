import { Topic } from './Topic';
import './Accordion.css';
import { useState } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [activeDiv, setActiveDiv] = useState(0);
  const topicsList = topics.map((topic) => (
    <Topic
      key={topic.id}
      onHeadingClick={(id: number) => {
        activeDiv === id ? setActiveDiv(0) : setActiveDiv(id);
      }}
      topic={topic}
      hidden={topic.id === activeDiv}
    />
  ));
  return <ul>{topicsList}</ul>;
}
