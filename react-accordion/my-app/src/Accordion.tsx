import { Topic } from './Topic';
import './Accordion.css';
import React, { useState } from 'react';

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
  function handleDivClick(event: React.MouseEvent<HTMLHeadingElement>) {
    if (activeDiv === Number(event.currentTarget.id)) {
      setActiveDiv(0);
    } else setActiveDiv(Number(event.currentTarget.id));
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
