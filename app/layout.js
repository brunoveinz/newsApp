export const metadata = {
    title: 'Condevuelta News',
    description: 'Mantente informado sobre Condevuelta y nuestras iniciativas.',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>
          {children}
        </body>
      </html>
    );
  }
  