import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { 
  BarChart, LineChart, AreaChart, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, Bar, Line, Area, ResponsiveContainer 
} from 'recharts';
import { 
  BarChart3, LineChart as LineChartIcon, PieChart, 
  FileText, Brain, Cpu, Eye, Code, LayoutGrid, 
  Settings, Mic, Construction, Building, 
  BarChartHorizontal, ArrowRight, Download
} from 'lucide-react';
import { ConstructionSiteViewer } from '@/components/analytics/ConstructionSiteViewer';
import { ConversationalInterface } from '@/components/analytics/ConversationalInterface';

// Sample analytics data
const employeeData = [
  { month: 'Jan', hired: 10, departed: 5, retention: 95 },
  { month: 'Feb', hired: 12, departed: 4, retention: 96 },
  { month: 'Mar', hired: 8, departed: 6, retention: 94 },
  { month: 'Apr', hired: 15, departed: 3, retention: 97 },
  { month: 'May', hired: 7, departed: 7, retention: 93 },
  { month: 'Jun', hired: 9, departed: 4, retention: 96 },
];

const constructionData = [
  { day: '1', planned: 10, actual: 8, deviation: -2 },
  { day: '2', planned: 20, actual: 18, deviation: -2 },
  { day: '3', planned: 30, actual: 27, deviation: -3 },
  { day: '4', planned: 40, actual: 39, deviation: -1 },
  { day: '5', planned: 50, actual: 48, deviation: -2 },
  { day: '6', planned: 60, actual: 58, deviation: -2 },
  { day: '7', planned: 70, actual: 72, deviation: 2 },
];

const modelPerformanceData = [
  { name: 'Resume Screening', accuracy: 92, f1Score: 91, latency: 120 },
  { name: 'Sentiment Analysis', accuracy: 88, f1Score: 85, latency: 100 },
  { name: 'Speech Recognition', accuracy: 94, f1Score: 93, latency: 150 },
  { name: 'Image Classification', accuracy: 96, f1Score: 95, latency: 200 },
];

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto animate-fade-in">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Analytics & AI</h1>
            <p className="text-muted-foreground">
              Advanced analytics and AI capabilities for your organization.
            </p>
          </div>

          <Tabs defaultValue="analytics" onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="analytics">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics Studio
              </TabsTrigger>
              <TabsTrigger value="conversational">
                <Mic className="mr-2 h-4 w-4" />
                Conversational AI
              </TabsTrigger>
              <TabsTrigger value="low-code">
                <Code className="mr-2 h-4 w-4" />
                Low-Code Builder
              </TabsTrigger>
              <TabsTrigger value="ai-training">
                <Brain className="mr-2 h-4 w-4" />
                AI Training
              </TabsTrigger>
              <TabsTrigger value="digital-twin">
                <Building className="mr-2 h-4 w-4" />
                Digital Twin
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Employee Metrics</CardTitle>
                    <CardDescription>
                      Hiring, retention, and turnover analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={employeeData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Bar yAxisId="left" dataKey="hired" name="Hired" fill="#4f46e5" />
                          <Bar yAxisId="left" dataKey="departed" name="Departed" fill="#f43f5e" />
                          <Line yAxisId="right" type="monotone" dataKey="retention" name="Retention %" stroke="#10b981" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Predictive Analytics</CardTitle>
                    <CardDescription>
                      AI-powered business predictions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted/40 p-4 rounded-lg">
                        <h3 className="font-medium text-sm">Staffing Prediction</h3>
                        <p className="text-2xl font-bold mt-1">+12 FTE</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Predicted staffing needs for next quarter
                        </p>
                      </div>
                      
                      <div className="bg-muted/40 p-4 rounded-lg">
                        <h3 className="font-medium text-sm">Turnover Risk</h3>
                        <p className="text-2xl font-bold mt-1">5.2%</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Predicted employee turnover in next 90 days
                        </p>
                      </div>
                      
                      <div className="bg-muted/40 p-4 rounded-lg">
                        <h3 className="font-medium text-sm">Hiring Timeline</h3>
                        <p className="text-2xl font-bold mt-1">14 days</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Average time-to-hire prediction for open roles
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View All Predictions
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Custom Reports</CardTitle>
                    <CardDescription>
                      Create and schedule custom analytics reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-3 text-primary" />
                          <div>
                            <p className="font-medium">Quarterly Performance</p>
                            <p className="text-xs text-muted-foreground">Updated 3 days ago</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-3 text-primary" />
                          <div>
                            <p className="font-medium">Recruitment Pipeline</p>
                            <p className="text-xs text-muted-foreground">Updated 1 day ago</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-3 text-primary" />
                          <div>
                            <p className="font-medium">Department Metrics</p>
                            <p className="text-xs text-muted-foreground">Updated today</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Create New Report
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Recommendations</CardTitle>
                    <CardDescription>
                      Smart recommendations based on your data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Improve Hiring Efficiency</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Data shows that technical interviews are taking 30% longer than industry average. 
                              Consider restructuring the interview process to improve efficiency.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Employee Engagement Alert</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Engineering department shows 15% drop in engagement scores. Schedule a focus group to 
                              identify potential issues.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Training Opportunity</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Based on skill gap analysis, consider implementing a leadership training program for 
                              mid-level managers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="conversational">
              <ConversationalInterface />
            </TabsContent>
            
            <TabsContent value="low-code">
              <Card>
                <CardHeader>
                  <CardTitle>Low-Code/No-Code Builder</CardTitle>
                  <CardDescription>
                    Create custom workflows and business applications without coding
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 border rounded-lg p-6 bg-muted/20">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium">Workflow Designer</h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Preview</Button>
                          <Button size="sm">Save</Button>
                        </div>
                      </div>
                      
                      <div className="bg-background border rounded-lg p-4 h-[400px] flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <LayoutGrid className="h-12 w-12 mx-auto mb-4 opacity-30" />
                          <p>Drag and drop components to build your workflow</p>
                          <Button variant="outline" className="mt-4">Add Component</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">Component Library</h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-primary/5 rounded-lg flex items-center justify-between cursor-pointer hover:bg-primary/10 transition">
                            <div className="flex items-center">
                              <Code className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-sm">Form Builder</span>
                            </div>
                            <span className="text-xs bg-primary/10 px-2 py-0.5 rounded">Drag</span>
                          </div>
                          <div className="p-3 bg-primary/5 rounded-lg flex items-center justify-between cursor-pointer hover:bg-primary/10 transition">
                            <div className="flex items-center">
                              <Settings className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-sm">Approval Flow</span>
                            </div>
                            <span className="text-xs bg-primary/10 px-2 py-0.5 rounded">Drag</span>
                          </div>
                          <div className="p-3 bg-primary/5 rounded-lg flex items-center justify-between cursor-pointer hover:bg-primary/10 transition">
                            <div className="flex items-center">
                              <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-sm">Data Table</span>
                            </div>
                            <span className="text-xs bg-primary/10 px-2 py-0.5 rounded">Drag</span>
                          </div>
                          <div className="p-3 bg-primary/5 rounded-lg flex items-center justify-between cursor-pointer hover:bg-primary/10 transition">
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-sm">Document Viewer</span>
                            </div>
                            <span className="text-xs bg-primary/10 px-2 py-0.5 rounded">Drag</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-4">Templates</h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-muted/40 rounded-lg">
                            <p className="text-sm font-medium">Onboarding Process</p>
                            <p className="text-xs text-muted-foreground">
                              Automate employee onboarding workflow
                            </p>
                          </div>
                          <div className="p-3 bg-muted/40 rounded-lg">
                            <p className="text-sm font-medium">Leave Request</p>
                            <p className="text-xs text-muted-foreground">
                              Time-off request and approval workflow
                            </p>
                          </div>
                          <div className="p-3 bg-muted/40 rounded-lg">
                            <p className="text-sm font-medium">Equipment Request</p>
                            <p className="text-xs text-muted-foreground">
                              Hardware and software request process
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ai-training">
              <Card>
                <CardHeader>
                  <CardTitle>AI Model Training & Management</CardTitle>
                  <CardDescription>
                    Monitor and optimize your AI models for HR applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-lg mb-4">Model Performance</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={modelPerformanceData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            layout="vertical"
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="accuracy" name="Accuracy %" fill="#4f46e5" />
                            <Bar dataKey="f1Score" name="F1 Score" fill="#10b981" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <h3 className="font-medium text-lg mt-6 mb-4">Active Models</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                          <div className="flex items-center">
                            <Cpu className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">Resume Parser</p>
                              <p className="text-xs text-muted-foreground">v2.5.3 • Updated 2 days ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                          <div className="flex items-center">
                            <Cpu className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">Employee Sentiment</p>
                              <p className="text-xs text-muted-foreground">v1.8.2 • Updated 7 days ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                          <div className="flex items-center">
                            <Cpu className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">Performance Predictor</p>
                              <p className="text-xs text-muted-foreground">v3.0.1 • Updated 14 days ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-lg mb-4">Training Data Management</h3>
                        <div className="p-6 border rounded-lg bg-muted/20">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-medium">Training Datasets</h4>
                            <Button variant="outline" size="sm">Upload Data</Button>
                          </div>
                          <div className="space-y-3">
                            <div className="p-3 bg-background rounded-lg flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium">Resume Corpus</p>
                                <p className="text-xs text-muted-foreground">5,832 documents • 1.2GB</p>
                              </div>
                              <Button variant="ghost" size="sm">View</Button>
                            </div>
                            <div className="p-3 bg-background rounded-lg flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium">Employee Feedback</p>
                                <p className="text-xs text-muted-foreground">12,450 entries • 340MB</p>
                              </div>
                              <Button variant="ghost" size="sm">View</Button>
                            </div>
                            <div className="p-3 bg-background rounded-lg flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium">Voice Samples</p>
                                <p className="text-xs text-muted-foreground">2,180 recordings • 4.5GB</p>
                              </div>
                              <Button variant="ghost" size="sm">View</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-4">Custom AI Configuration</h3>
                        <div className="space-y-3">
                          <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                            <h4 className="font-medium mb-2">Train New Model</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Create a custom AI model with your organization's data
                            </p>
                            <Button className="w-full">Start Training</Button>
                          </div>
                          
                          <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                            <h4 className="font-medium mb-2">Fine-Tune Existing Models</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Optimize pre-trained models for your specific needs
                            </p>
                            <Button variant="outline" className="w-full">Select Model</Button>
                          </div>
                          
                          <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                            <h4 className="font-medium mb-2">Model Performance Testing</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Evaluate model accuracy and efficiency metrics
                            </p>
                            <Button variant="outline" className="w-full">Run Tests</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="digital-twin">
              <ConstructionSiteViewer />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
