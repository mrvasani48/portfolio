Create a new ReactJS project using create-react-app:
perl


npx create-react-app my-app
cd my-app

Install Tailwind CSS and its dependencies using npm:

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

Create a postcss.config.js file in the root of your project and add the following code:
css

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

Create a tailwind.config.js file in the root of your project and add the following code:
css

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

This config file specifies how Tailwind should generate the CSS classes and what variants to include.

Import Tailwind CSS into your project by adding the following line to the index.css file:
scss

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
Finally, update the App.js file to include a sample Tailwind class:
javascript

import './index.css';

function App() {
  return (
    <div className="bg-blue-500">
      <h1 className="text-2xl font-bold text-white">Hello World</h1>
    </div>
  );
}

export default App;
This code sets the background color to blue and adds white text with a font size of 2xl.

Run the application using npm start and check if Tailwind CSS is applied correctly.