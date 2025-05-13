import { configureStore } from "@reduxjs/toolkit";

//✅ configureStore Redux Toolkit ka method(function) hai jo ek store banata hai..
//✅ configureStore is a Redux Toolkit method jo automatically DevTools, middleware, etc. add karta hai.
//✅ Hum har "feature" ke reducers yahan combine karte hain.

export const store = configureStore({
  reducer: { todos: todoReducer },
});
