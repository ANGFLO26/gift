import React from 'react';

function App() {
  // Bụi than đỏ, số lượng ít tạo điểm nhấn lưa thưa chân thật
  const embers = Array.from({ length: 5 }).map((_, i) => (
    <div key={`ember-${i}`} className={`ember ember-${i + 1}`}></div>
  ));

  return (
    <div className="scene">
      <div className="ambient-glow"></div>
      
      <div className="glowing-entity-container">
        <div className="embers-container">
          {embers}
        </div>
        
        {/* Ngọn lửa chóp nhọn với gradient chân thật */}
        <div className="glowing-flame">
           <div className="flame-shape"></div>
        </div>
        
        <div className="base-reflection"></div>
      </div>
    </div>
  );
}

export default App;
