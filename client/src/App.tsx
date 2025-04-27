import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BlogPost from "@/pages/BlogPost";
import BlogList from "@/pages/BlogList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import { ScrollArea } from "@/components/ui/scroll-area";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/blog" component={BlogList}/>
      <Route path="/blog/:slug" component={BlogPost}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <ScrollArea className="flex-1">
            <Router />
            <Footer />
          </ScrollArea>
          <BackToTop />
          <Chatbot />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
