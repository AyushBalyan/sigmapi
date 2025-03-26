import React from 'react';

export default function ExpertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white bg-no-repeat bg-cover min-h-screen">
      {children}
    </div>
  );
}