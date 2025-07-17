
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

// Lazy load route components for better performance
const Index = lazy(() => import("./pages/Index"));
const Apply = lazy(() => import("./pages/Apply"));
const ApplyTagalog = lazy(() => import("./pages/ApplyTagalog"));
const Talent = lazy(() => import("./pages/Talent"));
const CandidateProfile = lazy(() => import("./pages/CandidateProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="apply" element={<Apply />} />
              <Route path="apply/tag" element={<ApplyTagalog />} />
              <Route path="talent" element={<Talent />} />
              <Route path="candidate/:id" element={<CandidateProfile />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
