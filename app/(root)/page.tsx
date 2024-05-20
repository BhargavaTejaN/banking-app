import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';

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

const Home = async () => {

  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
             type="greeting"
             title="Welcome"
             user={loggedIn?.name || 'Guest'}
             subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200}
          />
        </header>
        RECENT-TRANSACTIONS
      </div>

      <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[]}
        />
    </section>
  )
}

export default Home