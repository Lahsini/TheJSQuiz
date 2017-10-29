import React from 'react';

// Custom components
import Header from '../components/Header';
import Card from '../components/DifficultyCard';

export default function Home() {
  return (
    <main>
      <div className="page-content">
        <Header />

        <div className="container animate">
          <h1>Welcome to The JS Quiz</h1>

          <div className="row">
            <Card
              title="BEGINNER"
              description="For JavaScript developers who are less experienced (< 6 months). Or who are not completely comfortable with the language."
              difficulty="beginner"
            />

            <Card
              title="INTERMEDIATE"
              description="For seasoned JavaScript developers who are comfortable with the language and have been exposed to it for at least 6 months."
              difficulty="intermediate"
            />

            <Card
              title="ADVANCED"
              description="For the advanced JavaScript developer who know the language like the back of their hand (Warning - May hurt your feelings)."
              difficulty="advanced"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
