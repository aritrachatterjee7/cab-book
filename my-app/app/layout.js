/*import { SignIn, SignedIn, SignedOut, ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    // Replace `afterSignInUrl` with `fallbackRedirectUrl` or `forceRedirectUrl`
    fallbackRedirectUrl="/dashboard"  // or use `forceRedirectUrl` as needed
  >
      <html lang="en">
        <body>
          <div>
            <SignedOut>
              <SignIn />
            </SignedOut>
            <SignedIn>
             
              
            </SignedIn>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}*/

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
            <SignIn routing="hash" />
          </SignedOut>
          <SignedIn>
            {children} {/* Render child pages/components here */}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}





