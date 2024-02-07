import React, { useState, useContext } from "react";

// Create a context to manage user authentication
const AuthContext = React.createContext();

// AuthProvider component to manage authentication state
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const login = (username) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
  };

  const signout = () => {
    setCurrentUser("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};

// App component
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const { isAuthenticated, currentUser, login, signout } = useAuth();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div>
      <button id="login-btn" onClick={() => login("rohan")}>
        Login
      </button>
      <button id="signout" onClick={signout}>
        Signout
      </button>
      {isAuthenticated && <div id="current-user">Current user: {currentUser}, isAuthenticated: Yes</div>}
      {!isAuthenticated && <div id="current-user">Current user: , isAuthenticated: No</div>}
      <input id="shopping-input" type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button id={`remove-${item}`} onClick={() => handleRemoveItem(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button id="clear-list" onClick={handleClearList}>
        Clear
      </button>
    </div>
  );
};

// Wrap the App component with AuthProvider
const MainApp = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default MainApp;
