import Image from "next/image";

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

const sampleUser: User = {
  $id: "12345",
  email: "user@example.com",
  userId: "9876",
  dwollaCustomerUrl: "https://dwolla.com/customers/12345",
  dwollaCustomerId: "dwolla-123",
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  address1: "123 Main St",
  city: "Anytown",
  state: "CA",
  postalCode: "12345",
  dateOfBirth: "1990-01-01",
  ssn: "123-45-6789",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = sampleUser;

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
