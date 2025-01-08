module.exports = {
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#FF7E67',
            dark: '#E63946',
          },
          secondary: {
            light: '#F4F1DE',
            dark: '#1D3557',
          },
          background: {
            light: '#FFFFFF',
            dark: '#121212',
          },
          surface: {
            light: '#FAFAFA',
            dark: '#1E1E1E',
          },
          accent: {
            light: '#5A9E7B', // Adjusted teal for better contrast
            dark: '#A8DADC',
          },
          text: {
            light: '#333333',
            dark: '#FFFFFF',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          card: '0 4px 8px rgba(0, 0, 0, 0.1)',
          cardDark: '0 4px 8px rgba(0, 0, 0, 0.6)',
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  };
  