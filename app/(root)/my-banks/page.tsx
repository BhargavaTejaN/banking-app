import HeaderBox from '@/components/HeaderBox'

const MyBanks = async() => {
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox
          title='My Bank Accounts'
          subtext='Effortlessly manage your banking activities.' 
        />

        <div className='space-y-4'>
          <h2 className='header-2'>Your cards</h2>
          <div className='flex flex-wrap gap-6'>
            {}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks