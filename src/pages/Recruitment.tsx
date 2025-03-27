
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, UserPlus, FileCheck, Brain, 
  Search, ChevronDown, CalendarDays, ArrowRight 
} from 'lucide-react';

const Recruitment = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto animate-fade-in">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Recruitment</h1>
            <p className="text-muted-foreground">
              Manage job openings, candidates, and the hiring process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Open Positions</p>
                  <h4 className="text-2xl font-bold">8</h4>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <UserPlus className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Candidates</p>
                  <h4 className="text-2xl font-bold">42</h4>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-amber-100 rounded-full">
                  <FileCheck className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Interviews This Week</p>
                  <h4 className="text-2xl font-bold">12</h4>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Brain className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Time-to-Hire (Avg.)</p>
                  <h4 className="text-2xl font-bold">12d</h4>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Open Positions</CardTitle>
                  <CardDescription>
                    Current job openings across all departments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/40 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Software Engineer</h3>
                          <p className="text-sm text-muted-foreground">Engineering Department</p>
                        </div>
                        <Badge>4 Candidates</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Pipeline Progress</span>
                          <span className="font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4 inline mr-1" />
                          Posted 14 days ago
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="bg-muted/40 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Product Manager</h3>
                          <p className="text-sm text-muted-foreground">Product Department</p>
                        </div>
                        <Badge>6 Candidates</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Pipeline Progress</span>
                          <span className="font-medium">50%</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4 inline mr-1" />
                          Posted 7 days ago
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="bg-muted/40 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">UX Designer</h3>
                          <p className="text-sm text-muted-foreground">Design Department</p>
                        </div>
                        <Badge>2 Candidates</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Pipeline Progress</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4 inline mr-1" />
                          Posted 3 days ago
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button>
                      Post New Position
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Recruiting</CardTitle>
                  <CardDescription>
                    Use AI to find and screen candidates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Resume Screening</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        AI analyzes resumes to match candidates to job requirements
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Screen Resumes
                      </Button>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Candidate Matching</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Find potential candidates from talent pool
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Match Candidates
                      </Button>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Interview Questions</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate personalized interview questions
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Generate Questions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recruitment;
