
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { StatCard } from '@/components/dashboard/StatCard';
import { EmployeeChart } from '@/components/dashboard/EmployeeChart';
import { AnalyticsCard } from '@/components/dashboard/AnalyticsCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, UserCheck, Clock, Award, Brain, ArrowRight, Lightbulb, Briefcase } from 'lucide-react';

// Sample data
const employeeData = [
  { name: 'Jan', value: 234 },
  { name: 'Feb', value: 245 },
  { name: 'Mar', value: 260 },
  { name: 'Apr', value: 275 },
  { name: 'May', value: 290 },
  { name: 'Jun', value: 310 },
  { name: 'Jul', value: 325 },
  { name: 'Aug', value: 340 },
];

const engagementData = [
  { name: 'Jan', value: 75 },
  { name: 'Feb', value: 78 },
  { name: 'Mar', value: 72 },
  { name: 'Apr', value: 82 },
  { name: 'May', value: 85 },
  { name: 'Jun', value: 86 },
  { name: 'Jul', value: 88 },
  { name: 'Aug', value: 90 },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <section className="px-4 py-6 md:py-10 animate-fade-in">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Welcome back, John</h1>
            <p className="text-lg text-muted-foreground">Your HR dashboard overview for August 2023</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              title="Total Employees"
              value={348}
              change={2.5}
              icon={<Users className="h-4 w-4" />}
              isLoading={isLoading}
            />
            <StatCard 
              title="Employee Retention"
              value={94.8}
              suffix="%"
              change={1.2}
              icon={<UserCheck className="h-4 w-4" />}
              decimals={1}
              isLoading={isLoading}
            />
            <StatCard 
              title="Avg. Time to Hire"
              value={12}
              suffix=" days"
              change={-3.6}
              icon={<Clock className="h-4 w-4" />}
              isLoading={isLoading}
            />
            <StatCard 
              title="Employee Engagement"
              value={87}
              suffix="%"
              change={4.3}
              icon={<Award className="h-4 w-4" />}
              isLoading={isLoading}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <DashboardCard 
              title="Workforce Trends"
              isLoading={isLoading}
            >
              <Tabs defaultValue="employees">
                <TabsList className="mb-4">
                  <TabsTrigger value="employees">Employees</TabsTrigger>
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                </TabsList>
                <TabsContent value="employees">
                  <EmployeeChart 
                    data={employeeData} 
                    color="#3b82f6"
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Head Count</p>
                      <p className="text-2xl font-semibold">348</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Growth Rate</p>
                      <p className="text-2xl font-semibold text-green-600">+4.6%</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="engagement">
                  <EmployeeChart 
                    data={engagementData} 
                    color="#10b981"
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Engagement Score</p>
                      <p className="text-2xl font-semibold">87%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Participation</p>
                      <p className="text-2xl font-semibold">96%</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DashboardCard>
            
            <AnalyticsCard
              title="AI Workforce Insights"
              description="Advanced analytics on your workforce data reveals these key insights:"
              isLoading={isLoading}
              isAI={true}
            >
              <div className="space-y-4">
                <div className="flex p-3 bg-primary/5 rounded-lg items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Engineering team productivity has increased by 12% this quarter</p>
                  </div>
                </div>
                <div className="flex p-3 bg-primary/5 rounded-lg items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Employee satisfaction in sales department shows a correlation with recent training programs</p>
                  </div>
                </div>
                <Button variant="link" className="px-0">
                  View all insights <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </AnalyticsCard>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <DashboardCard
              title="Recruitment Pipeline"
              badge={{ label: "8 Open Positions", variant: "success" }}
              icon={<Briefcase className="h-4 w-4" />}
              isLoading={isLoading}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Software Engineer</p>
                    <p className="text-xs text-muted-foreground">4 candidates in final round</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Product Manager</p>
                    <p className="text-xs text-muted-foreground">6 candidates in screening</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">UX Designer</p>
                    <p className="text-xs text-muted-foreground">2 candidates in interview</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <Button className="w-full">Manage Recruitment</Button>
              </div>
            </DashboardCard>

            <DashboardCard
              title="Training & Development"
              icon={<Brain className="h-4 w-4" />}
              isLoading={isLoading}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <p className="text-2xl font-semibold">12</p>
                    <p className="text-xs text-muted-foreground">Active Programs</p>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <p className="text-2xl font-semibold">87%</p>
                    <p className="text-xs text-muted-foreground">Completion Rate</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Leadership Training</p>
                    <p className="text-xs text-muted-foreground">23 participants</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Technical Skills</p>
                    <p className="text-xs text-muted-foreground">45 participants</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <Button className="w-full">Manage Training</Button>
              </div>
            </DashboardCard>

            <DashboardCard
              title="AI Assistant"
              icon={<Cpu className="h-4 w-4" />}
              isLoading={isLoading}
            >
              <div className="space-y-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm mb-2">How can I help you today?</p>
                  <div className="grid grid-cols-1 gap-2">
                    <Button variant="outline" size="sm" className="justify-start">
                      Generate performance report
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      Schedule team meeting
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      Update hiring status
                    </Button>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Recent Requests</p>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground p-2 bg-muted/50 rounded">
                      Created quarterly compensation report
                    </div>
                    <div className="text-xs text-muted-foreground p-2 bg-muted/50 rounded">
                      Updated employee onboarding workflow
                    </div>
                  </div>
                </div>
                <Button className="w-full">Open AI Assistant</Button>
              </div>
            </DashboardCard>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Dashboard;
