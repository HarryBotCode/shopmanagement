import { Grid, GridItem } from '@chakra-ui/react'
import { React, useState } from 'react'
import Client from './Client'
import Dashboard from './Dashboard'
import Header from './Header'
import Invoices from './Invoices'
import SearchInvoice from './SearchInvoice'
import Sidebar from './Sidebar'
import Expenses from './Expenses'
import PersonalExpense from './PersonalExpense'
import BusinessExpense from './BusinessExpense'
import TotalInvoices from './TotalInvoices'
import TotalPersonalExpense from './TotalPersonalExpense'
import TotalBusinessExpense from './TotalBusinessExpense'

const Home = () => {

  const [inv, setInv] = useState(false);
  const [searchinv, setSearchinv] = useState(false);
  const [client, setClient] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const [personalExpenses, setPersonalExpenses] = useState(false);
  const [businessExpenses, setBusinessExpenses] = useState(false);
  const [totalinv, setTotalinv] = useState(false);
  const [totalPersonalExpenses, setTotalPersonalExpenses] = useState(false);
  const [totalBusinessExpenses, setTotalBusinessExpenses] = useState(false);

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'250px 1fr'}
        h='200vh'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' area={'header'}>
          < Header />
        </GridItem>
        <GridItem pl='2' area={'nav'}>
          <Sidebar setInv={setInv}
            setSearchinv={setSearchinv}
            handleRefreshClick={handleRefreshClick}
            setClient={setClient}
            setExpenses={setExpenses}
            setPersonalExpenses={setPersonalExpenses}
            setBusinessExpenses={setBusinessExpenses}
            setTotalinv={setTotalinv}
            setTotalPersonalExpenses={setTotalPersonalExpenses}
            setTotalBusinessExpenses={setTotalBusinessExpenses}
          />
        </GridItem>
        <GridItem pl='2' bg='#fafafa' area={'main'}>

          {!inv && !searchinv && !client && !expenses && !personalExpenses && !businessExpenses && !totalinv && !totalPersonalExpenses && !totalBusinessExpenses && (
            <Dashboard 
            setTotalinv={setTotalinv}
            setTotalPersonalExpenses={setTotalPersonalExpenses}
            setTotalBusinessExpenses={setTotalBusinessExpenses}
            />
          )}

          {inv && (


            <SearchInvoice
              setSearchinv={setSearchinv}
              setInv={setInv} />
          )}

          {searchinv && !inv && (

            <Invoices
              setSearchinv={setSearchinv}
              setInv={setInv} />
          )}

          {client && (
            <Client />
          )}

          {expenses && (
            <Expenses
              setPersonalExpenses={setPersonalExpenses}
              setExpenses={setExpenses}
              setClient={setClient}
              setBusinessExpenses={setBusinessExpenses}
            />
          )}

          {personalExpenses && !expenses && (
            <PersonalExpense
              setInv={setInv}
              setSearchinv={setSearchinv}
              setPersonalExpenses={setPersonalExpenses}
              setExpenses={setExpenses}
              setClient={setClient} />
          )}

          {businessExpenses && !expenses && (
            <BusinessExpense
              setBusinessExpenses={setBusinessExpenses}
              setInv={setInv}
              setSearchinv={setSearchinv}
              setPersonalExpenses={setPersonalExpenses}
              setExpenses={setExpenses}
              setClient={setClient}
            />
          )}

          {totalinv && !inv && !searchinv && (
            <TotalInvoices 
            setSearchinv={setSearchinv}
            setInv={setInv}
            />
          )}
         
          {totalPersonalExpenses && !personalExpenses && (
            <TotalPersonalExpense
            
            setPersonalExpenses={setPersonalExpenses}
            setExpenses={setExpenses}
            />
          )}
          
           {totalBusinessExpenses && !businessExpenses && (
            <TotalBusinessExpense
            
            setBusinessExpenses={setBusinessExpenses}
            setExpenses={setExpenses}
            />
          )} 


        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </>
  )
}

export default Home