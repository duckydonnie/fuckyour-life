import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary">Welcome to Fuckyour.life</h1>
        <p className="text-lg text-secondary mt-2">The most fair and best value bio service, providing the best support for our customers.</p>
      </header>

      <section className="w-full max-w-2xl p-4">
        <h2 className="text-xl font-semibold text-primary">Why Choose Us?</h2>
        <ul className="space-y-4 mt-4">
          <li>Most Fair Service: We prioritize fair pricing and transparent service.</li>
          <li>Best Value: Get the best features for your bio page with no hidden fees.</li>
          <li>Top-Notch Support: Our dedicated customer support team is always ready to assist you.</li>
        </ul>
      </section>

      <footer className="mt-12">
        <p className="text-secondary">© 2024 Fuckyour.life. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
