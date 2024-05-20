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
  function handleDivClick(value: string) {
    if (activeDiv === Number(value)) {
      setActiveDiv(0);
    } else setActiveDiv(Number(value));
  }
  const topicsList = topics.map((topic) => (
    <Topic
      key={topic.id}
      onDivClick={handleDivClick}
      topic={topic}
      hidden={topic.id === activeDiv}
    />
  ));
  return <ul>{topicsList}</ul>;
}
