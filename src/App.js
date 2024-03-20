import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Categories' component={Categories}/>
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
