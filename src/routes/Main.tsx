import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/main/main.scss'
import HomePage from "../pages/main/HomePage";
import LoginPage from "../pages/main/LoginPage";
import RegisterPage from "../pages/main/RegisterPage";
import PackagePage from "../pages/main/PackagePage";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StepPage from "../pages/main/stepCheckout/Step1Page";
import PaymentPage from "../pages/main/stepCheckout/Step2Page";
import Step4Page from "../pages/main/stepCheckout/Step4Page";
import Step5Page from "../pages/main/stepCheckout/Step5Page";
import { SelectWebPage } from "../pages/main/stepCheckout/Step3Page";
import ManageWebsitePage from "../pages/main/ManageWebsitePage";
import { AuthProvider } from "../context/AuthContext";
import ProfilePage from "../pages/main/ProfilePage";
import ResetPasswordPage from "../pages/main/ResetPasswordPage";
import ForgotPasswordPage from "../pages/main/ForgotPasswordPage";
import BlogsPage from "../pages/main/BlogsPage";
import BlogPage from "../pages/main/BlogPage";
import { RequireAuth } from '../midleware/authMiddleware';
import FeaturePage from "../pages/main/FeaturePage";
import PerPackage from "../pages/main/PerPackage";
import Step6Page from "../pages/main/stepCheckout/Step6Page";



const Main: React.FC = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/package" element={<PackagePage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/manage" element={<RequireAuth><ManageWebsitePage /></RequireAuth>} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="/per-package/:store_id/:user_id" element={<RequireAuth><PerPackage /></RequireAuth>} />
          <Route path="/step1" element={<RequireAuth><StepPage /></RequireAuth>} />
          <Route path="/step2" element={<RequireAuth><PaymentPage /></RequireAuth>} />
          <Route path="/step3" element={<RequireAuth><SelectWebPage /></RequireAuth>} />
          <Route path="/step4" element={<RequireAuth><Step4Page /></RequireAuth>} />
          <Route path="/step5/:select_store/:store_id/:user_id" element={<RequireAuth><Step5Page /></RequireAuth>} />
          <Route path="/step6" element={<RequireAuth><Step6Page /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider >

  );
};

export default Main;