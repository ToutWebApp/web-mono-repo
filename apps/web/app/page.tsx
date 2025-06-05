import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import {
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../../packages/ui/src';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold my-4">Testing Shadcn/UI Components</h2>
        
        <div className="my-4">
          <Button>Click Me (from UI package)</Button>
        </div>

        <div className="my-4">
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              This is an info alert from the UI package.
            </AlertDescription>
          </Alert>
        </div>

        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>My Card (from UI package)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the card content, rendered by the UI package.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
