'use client';

import { useState } from 'react';
import React from 'react';
import QuestionCard from '../questions/question-card';
import { questionsData } from '@/data/questions.data';

const QuestionClientBlock = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {questionsData.map((item, i) => (
        <QuestionCard key={i} i={i} {...item} activeFAQ={activeFAQ} setActiveFAQ={setActiveFAQ} />
      ))}
    </div>
  );
};

export default QuestionClientBlock;
