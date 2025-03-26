import React from 'react';

export default function ExpertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/Experts/ExpertsBG.png')] bg-no-repeat bg-cover min-h-screen">
      {children}
    </div>
  );
}