import React from 'react';

export default function ExpertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/AboutUs/About-bg.png')] bg-no-repeat bg-cover min-h-screen">
      {children}
    </div>
  );
}