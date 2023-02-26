import { Grid, GridItem } from '@chakra-ui/react'
import { React, useState, useEffect } from 'react'
import Sales from './Sales'
import Dashboard from './Dashboard'
import Header from './Header'
import Invoices from './Invoices'
import Sidebar from './Sidebar'
import Expenses from './Expenses'
import PersonalExpense from './PersonalExpense'
import BusinessExpense from './BusinessExpense'
import TotalInvoices from './TotalInvoices'
import TotalPersonalExpense from './TotalPersonalExpense'
import TotalBusinessExpense from './TotalBusinessExpense'

const Home = () => {

  const [inv, setInv] = useState(false);
  const [sales, setSales] = useState(false);
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
            
            handleRefreshClick={handleRefreshClick}
            setSales={setSales}
            setExpenses={setExpenses}
            setPersonalExpenses={setPersonalExpenses}
            setBusinessExpenses={setBusinessExpenses}
            setTotalinv={setTotalinv}
            setTotalPersonalExpenses={setTotalPersonalExpenses}
            setTotalBusinessExpenses={setTotalBusinessExpenses}
          />
        </GridItem>
        <GridItem pl='2' bg='#fafafa' area={'main'}>

          {!inv && !sales && !expenses && !personalExpenses && !businessExpenses && !totalinv && !totalPersonalExpenses && !totalBusinessExpenses && (
            <Dashboard 
            setTotalinv={setTotalinv}
            setTotalPersonalExpenses={setTotalPersonalExpenses}
            setTotalBusinessExpenses={setTotalBusinessExpenses}
            setSales={setSales}
            />
          )}

          {inv && (


            <Invoices
            setTotalinv={setTotalinv}
              setInv={setInv} 
              
              />
          )}

          {/* {totalinv && !inv && (

            <TotalInvoices
              setTotalinv={setTotalinv}
              setInv={setInv}
              
               />
          )} */}

          {sales && (
            <Sales />
          )}

          {expenses && (
            <Expenses
              setPersonalExpenses={setPersonalExpenses}
              setExpenses={setExpenses}
              setSales={setSales}
              setBusinessExpenses={setBusinessExpenses}
            />
          )}

          {personalExpenses && !expenses &&  !businessExpenses && (
            <PersonalExpense
              setInv={setInv}
              setPersonalExpenses={setPersonalExpenses}
              setExpenses={setExpenses}
              setSales={setSales} 
              setBusinessExpenses={setBusinessExpenses}
              setTotalinv={setTotalinv}
              setTotalPersonalExpenses={setTotalPersonalExpenses}/>
          )}

          {businessExpenses && !expenses && !personalExpenses &&(
            <BusinessExpense
              setBusinessExpenses={setBusinessExpenses}
              setInv={setInv}
              setPersonalExpenses={setPersonalExpenses}
              setExpenses={setExpenses}
              setSales={setSales}
              setTotalinv={setTotalinv}
              setTotalBusinessExpenses={setTotalBusinessExpenses}
            />
          )}

          {totalinv && !inv && (
            <TotalInvoices 
            setInv={setInv}
            setTotalinv={setTotalinv}
            />
          )}
         
          {totalPersonalExpenses && !personalExpenses && (
            <TotalPersonalExpense
            setBusinessExpenses={setBusinessExpenses}
            setPersonalExpenses={setPersonalExpenses}
            setExpenses={setExpenses}
            />
          )}
          
           {totalBusinessExpenses && !businessExpenses && (
            <TotalBusinessExpense
            setPersonalExpenses={setPersonalExpenses}
            setBusinessExpenses={setBusinessExpenses}
            setExpenses={setExpenses}
            />
          )} 


        </GridItem>
        {/* <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem> */}
      </Grid>
    </>
  )
}

export default Home