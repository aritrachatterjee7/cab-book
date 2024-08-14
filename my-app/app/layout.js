import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import './globals.css';
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider fallbackRedirectUrl="/dashboard">
      <html lang="en">
        <body>
          <Header />
          <SignedOut>
            <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gray-100">
              <SignIn routing="hash" />
            </div>
          </SignedOut>
          <SignedIn>
            {children} {/* Render child pages/components here */}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
