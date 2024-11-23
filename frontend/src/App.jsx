import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
const BookListing = lazy(() => import("./pages/BookListing"));
const BookDetails = lazy(() => import("./pages/BookDetails"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const SubmitReview = lazy(() => import("./pages/SubmitReview"));
const AddBook = lazy(() => import("./pages/AddBook"));
const SignUp = lazy(() => import("./pages/signUp"));
const SignIn = lazy(() => import("./pages/signIn"));

const App = () => (
  <Router>
    <Header />
    <main className="min-h-screen p-4">
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookListing />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/submit-review/:id" element={<SubmitReview />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </Router>
);

export default App;
